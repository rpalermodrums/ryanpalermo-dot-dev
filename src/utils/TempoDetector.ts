class TempoDetector {
	private audioContext: AudioContext;
	private audioBuffer: AudioBuffer | null = null;

	constructor() {
		this.audioContext = new (
			window.AudioContext ||
			(window as unknown as { webkitAudioContext: typeof AudioContext })
				.webkitAudioContext
		)();
	}

	async loadAudio(file: File): Promise<void> {
		const arrayBuffer = await file.arrayBuffer();
		this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
	}

	private computeOnsetEnvelope(): Float32Array {
		if (!this.audioBuffer) throw new Error("Audio not loaded");

		const bufferData = this.audioBuffer.getChannelData(0);
		const fftSize = 2048;
		const hopSize = fftSize / 4;
		const onsetEnvelope = new Float32Array(
			Math.floor(bufferData.length / hopSize),
		);

		for (let i = 0; i < onsetEnvelope.length; i++) {
			const start = i * hopSize;
			const end = start + fftSize;
			const slice = bufferData.slice(start, end);
			onsetEnvelope[i] = this.computeSpectralFlux(slice);
		}

		return onsetEnvelope;
	}

	private computeSpectralFlux(buffer: Float32Array): number {
		const fft = new Float32Array(buffer.length);
		for (let i = 0; i < buffer.length; i++) {
			fft[i] = Math.abs(buffer[i]);
		}
		return fft.reduce((sum, val) => sum + val, 0);
	}

	private computeAutocorrelation(onsetEnvelope: Float32Array): Float32Array {
		const autocorrelation = new Float32Array(onsetEnvelope.length);
		for (let lag = 0; lag < onsetEnvelope.length; lag++) {
			let sum = 0;
			for (let i = 0; i < onsetEnvelope.length - lag; i++) {
				sum += onsetEnvelope[i] * onsetEnvelope[i + lag];
			}
			autocorrelation[lag] = sum;
		}
		return autocorrelation;
	}

	async detectTempo(): Promise<number> {
		if (!this.audioBuffer) throw new Error("Audio not loaded");

		const onsetEnvelope = this.computeOnsetEnvelope();
		const autocorrelation = this.computeAutocorrelation(onsetEnvelope);

		const minBPM = 60;
		const maxBPM = 200;
		const sampleRate = this.audioBuffer.sampleRate;
		const hopSize = 512;

		// New: Implement comb filter to enhance periodicity
		const combFilteredAutocorrelation = this.applyCombFilter(autocorrelation);

		let maxCorrelation = Number.NEGATIVE_INFINITY;
		let bestLag = 0;

		for (
			let lag = Math.floor((60 * sampleRate) / (hopSize * maxBPM));
			lag < Math.floor((60 * sampleRate) / (hopSize * minBPM));
			lag++
		) {
			if (combFilteredAutocorrelation[lag] > maxCorrelation) {
				maxCorrelation = combFilteredAutocorrelation[lag];
				bestLag = lag;
			}
		}

		// New: Implement tempo doubling/halving check
		const estimatedTempo = this.refineTempo(
			60 / ((bestLag * hopSize) / sampleRate),
			onsetEnvelope,
		);
		return estimatedTempo;
	}

	// New method: Apply comb filter to enhance periodicity
	private applyCombFilter(autocorrelation: Float32Array): Float32Array {
		const filtered = new Float32Array(autocorrelation.length);
		for (let i = 0; i < autocorrelation.length; i++) {
			filtered[i] = autocorrelation[i];
			if (i >= 2) filtered[i] += 0.5 * autocorrelation[i / 2];
			if (i >= 3) filtered[i] += 0.5 * autocorrelation[i / 3];
			if (i >= 4) filtered[i] += 0.5 * autocorrelation[i / 4];
		}
		return filtered;
	}

	// New method: Refine tempo estimation
	private refineTempo(
		initialTempo: number,
		onsetEnvelope: Float32Array,
	): number {
		// Consider more tempo candidates, including the 3/4 rhythm adjustment
		const tempos = [
			initialTempo * 0.5,
			initialTempo * 0.75, // New: 3/4 adjustment
			initialTempo,
			initialTempo * 1.5, // New: 3/2 adjustment
			initialTempo * 2,
		];
		let bestScore = Number.NEGATIVE_INFINITY;
		let bestTempo = initialTempo;

		for (const tempo of tempos) {
			const score = this.evaluateTempo(tempo, onsetEnvelope);
			if (score > bestScore) {
				bestScore = score;
				bestTempo = tempo;
			}
		}

		return bestTempo;
	}

	// New method: Evaluate tempo candidates
	private evaluateTempo(tempo: number, onsetEnvelope: Float32Array): number {
		const beatPeriod = 60 / tempo;
		const hopSize = 512;
		const sampleRate = this.audioBuffer?.sampleRate;
		const beatSamples = Math.round((beatPeriod * sampleRate) / hopSize);

		let score = 0;
		for (let i = 0; i < onsetEnvelope.length; i += beatSamples) {
			score += this.getLocalPeak(
				onsetEnvelope,
				i,
				Math.floor(beatSamples * 0.1),
			);
		}

		// New: Add score for offbeat detection (for 3/4 patterns)
		for (
			let i = Math.floor(beatSamples * 0.75);
			i < onsetEnvelope.length;
			i += beatSamples
		) {
			score +=
				0.5 *
				this.getLocalPeak(onsetEnvelope, i, Math.floor(beatSamples * 0.1));
		}

		return score;
	}

	// New method: Get local peak in onset envelope
	private getLocalPeak(
		onsetEnvelope: Float32Array,
		center: number,
		range: number,
	): number {
		let peak = 0;
		for (
			let i = Math.max(0, center - range);
			i < Math.min(onsetEnvelope.length, center + range);
			i++
		) {
			peak = Math.max(peak, onsetEnvelope[i]);
		}
		return peak;
	}
}

export default TempoDetector;
