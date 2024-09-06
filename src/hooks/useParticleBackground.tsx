import { type RefObject, useEffect } from "react";

interface Particle {
	x: number;
	y: number;
	radius: number;
	vx: number;
	vy: number;
	color: string;
}

const useParticleBackground = (canvasRef: RefObject<HTMLCanvasElement>) => {
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas?.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const particles: Particle[] = [];

		for (let i = 0; i < 100; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * 2 + 1,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				color: `hsl(${Math.random() * 360}, 100%, 50%)`,
			});
		}

		function animate() {
			if (!ctx || !canvas) return;
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const particle of particles) {
				particle.x += particle.vx;
				particle.y += particle.vy;

				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
				ctx.fillStyle = particle.color;
				ctx.fill();
			}
		}

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [canvasRef]);
};

export default useParticleBackground;
