import React, { useRef, useCallback, useEffect } from "react";
import { useSoundWave } from "../hooks/useSoundWave";

interface SoundWaveProps {
	width: number;
	height: number;
	onFileUpload: (file: File) => void;
	bpm: number;
}

const SoundWave: React.FC<SoundWaveProps> = React.memo(
	({ width, height, onFileUpload, bpm }) => {
		const canvasRef = useRef<HTMLCanvasElement>(null);
		const {
			particles,
			detectedTempo,
			updateParticles,
			handleRipple,
			detectTempo,
			getTempoColor,
		} = useSoundWave(width, height, bpm);

		const drawWave = useCallback(
			(ctx: CanvasRenderingContext2D) => {
				ctx.clearRect(0, 0, width, height);

				// Draw filled area
				ctx.beginPath();
				ctx.moveTo(0, height / 2);
				particles.forEach((particle) => ctx.lineTo(particle.x, particle.y));
				ctx.lineTo(width, height / 2);
				ctx.closePath();

				const gradient = ctx.createLinearGradient(0, 0, width, 0);
				particles.forEach((particle, index) => {
					gradient.addColorStop(index / particles.length, particle.getColor());
				});
				ctx.fillStyle = gradient;
				ctx.fill();

				// Draw wave line and particles
				ctx.beginPath();
				particles.forEach((particle, index) => {
					if (index === 0) ctx.moveTo(particle.x, particle.y);
					else ctx.lineTo(particle.x, particle.y);

					ctx.beginPath();
					ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
					ctx.fillStyle = particle.getColor();
					ctx.fill();
				});
				ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
				ctx.lineWidth = 2;
				ctx.stroke();
			},
			[particles, width, height],
		);

		const animate = useCallback(() => {
			const ctx = canvasRef.current?.getContext("2d");
			if (!ctx) return;

			updateParticles(performance.now() * 0.001);
			drawWave(ctx);

			requestAnimationFrame(animate);
		}, [updateParticles, drawWave]);

		useEffect(() => {
			const animationId = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(animationId);
		}, [animate]);

		const handleClick = useCallback(
			(event: React.MouseEvent<HTMLCanvasElement>) => {
				const rect = canvasRef.current?.getBoundingClientRect();
				if (rect) {
					handleRipple(event.clientX - rect.left);
				}
			},
			[handleRipple],
		);

		const handleFileUpload = useCallback(
			async (event: React.ChangeEvent<HTMLInputElement>) => {
				const file = event.target.files?.[0];
				if (file) {
					onFileUpload(file);
					await detectTempo(file);
				}
			},
			[onFileUpload, detectTempo],
		);

		const tempoColor = detectedTempo ? getTempoColor(detectedTempo) : "blue";

		return (
			<div className="relative">
				<canvas
					role="img"
					ref={canvasRef}
					width={width}
					height={height}
					className="w-full overflow-hidden rounded-lg cursor-pointer"
					onClick={handleClick}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							handleClick(e as unknown as React.MouseEvent<HTMLCanvasElement>);
						}
					}}
					tabIndex={0}
					aria-label="Interactive sound wave visualization"
					style={{
						background: `linear-gradient(to right, ${tempoColor}22, ${tempoColor}66)`,
					}}
				/>
				<div className="flex items-center justify-center mt-4 space-x-4">
					<input
						type="file"
						accept="audio/*"
						onChange={handleFileUpload}
						className="hidden"
						id={`fileUpload-${width}-${height}`}
					/>
					<label
						htmlFor={`fileUpload-${width}-${height}`}
						className={`cursor-pointer bg-gradient-to-t from-${tempoColor} to-${tempoColor} bg-opacity-80 text-canvas-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-200 transform hover:scale-105`}
					>
						Upload Audio
					</label>
					{detectedTempo && (
						<span className="font-semibold text-soft-shadow dark:text-canvas-white">
							Detected Tempo: {Math.round(detectedTempo)} BPM
						</span>
					)}
				</div>
			</div>
		);
	},
);

export default SoundWave;
