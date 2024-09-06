import { useState, useCallback, useEffect } from "react";
import Particle from "../utils/Particle";

const useParticles = (width: number, height: number, bpm: number) => {
	const [particles, setParticles] = useState<Particle[]>([]);

	const initializeParticles = useCallback(() => {
		const newParticles: Particle[] = [];
		const numParticles = width;
		for (let i = 0; i < numParticles; i++) {
			newParticles.push(new Particle(i, height / 2, height / 4, 0.02, i * 0.1));
		}
		setParticles(newParticles);
	}, [width, height]);

	useEffect(() => {
		initializeParticles();
	}, [initializeParticles]);

	const updateParticles = useCallback(
		(time: number) => {
			setParticles((prevParticles) =>
				prevParticles.map((particle) => {
					particle.update(time * (bpm / 120));
					return particle;
				}),
			);
		},
		[bpm],
	);

	return { particles, updateParticles };
};

export default useParticles;
