import React, { useEffect, useRef } from 'react';
import DJDeck from '../components/DJDeck';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];

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

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    }

    animate();
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-t from-persistence-purple to-dreamscape-blue bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
          <h1 className="text-6xl font-bold mb-4 text-center text-canvas-cream">Ryan Palermo</h1>
          <h2 className="text-3xl font-semibold mb-8 text-center text-melting-gold">I build software and make music.</h2>
        </div>
        <div className="mt-8">
          <DJDeck />
        </div>
      </div>
    </div>
  );
};

export default Home;