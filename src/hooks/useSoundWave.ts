import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Particle from "../utils/Particle";
import TempoDetector from "../utils/TempoDetector";

const TEMPO_RANGE = { min: 60, max: 180 };

export const useSoundWave = (width: number, height: number, bpm: number) => {
	const [particles, setParticles] = useState<Particle[]>([]);
	const [detectedTempo, setDetectedTempo] = useState<number | null>(null);
	const tempoDetectorRef = useRef(new TempoDetector());

	const getColorProgress = useCallback((tempo: number) => {
		return Math.min(
			Math.max(
				(tempo - TEMPO_RANGE.min) / (TEMPO_RANGE.max - TEMPO_RANGE.min),
				0,
			),
			1,
		);
	}, []);

	const colorProgress = useMemo(
		() => getColorProgress(bpm),
		[getColorProgress, bpm],
	);

	const initializeParticles = useCallback(() => {
		setParticles(
			Array.from(
				{ length: width },
				(_, i) => new Particle(i, height / 2, height / 4, 0.02, i * 0.1),
			),
		);
	}, [width, height]);

	useEffect(() => {
		initializeParticles();
	}, [initializeParticles]);

	const updateParticles = useCallback(
		(time: number) => {
			particles.forEach((particle) => particle.update(time * (bpm / 120)));
		},
		[particles, bpm],
	);

	const getTempoColor = useCallback(
		(tempo: number) => {
			const progress = getColorProgress(tempo);
			if (progress < 0.33) return "surreal-sky";
			if (progress < 0.66) return "melting-clock-gold";
			return "dream-red";
		},
		[getColorProgress],
	);

	const handleRipple = useCallback(
		(x: number) => {
			particles.forEach((particle) => {
				particle.applyRipple(x, 20);
				particle.updateColorProgress(colorProgress);
			});
		},
		[particles, colorProgress],
	);

	const detectTempo = useCallback(
		async (file: File) => {
			const tempo = await tempoDetectorRef.current.detectTempo(file);
			setDetectedTempo(tempo);
			if (tempo) {
				const color = getTempoColor(tempo);
				particles.forEach((particle) => particle.setBaseColor(color));
			}
		},
		[getTempoColor, particles],
	);

	return {
		particles,
		detectedTempo,
		colorProgress,
		updateParticles,
		handleRipple,
		detectTempo,
		getTempoColor,
	};
};
