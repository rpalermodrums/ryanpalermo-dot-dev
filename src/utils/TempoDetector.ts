class TempoDetector {
  private audioContext: AudioContext;
  private audioBuffer: AudioBuffer | null = null;

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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
    const onsetEnvelope = new Float32Array(Math.floor(bufferData.length / hopSize));

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

    let maxCorrelation = -Infinity;
    let bestLag = 0;

    for (let lag = Math.floor(60 * sampleRate / (hopSize * maxBPM)); 
         lag < Math.floor(60 * sampleRate / (hopSize * minBPM)); 
         lag++) {
      if (autocorrelation[lag] > maxCorrelation) {
        maxCorrelation = autocorrelation[lag];
        bestLag = lag;
      }
    }

    const estimatedTempo = 60 / (bestLag * hopSize / sampleRate);
    return estimatedTempo;
  }
}

export default TempoDetector;