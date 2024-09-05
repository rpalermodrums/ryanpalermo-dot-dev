import React, { useEffect, useRef, useState, useCallback } from 'react';
import Particle from '../utils/Particle';

interface SoundWaveProps {
  width: number;
  height: number;
}

const SoundWave: React.FC<SoundWaveProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  const initializeParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const numParticles = width;
    for (let i = 0; i < numParticles; i++) {
      newParticles.push(new Particle(i, height / 2));
    }
    setParticles(newParticles);
  }, [width, height]);

  useEffect(() => {
    initializeParticles();
  }, [initializeParticles]);

  const updateParticles = useCallback(() => {
    particles.forEach(particle => {
      particle.update(0.03, 0.02);
    });
  }, [particles]);

  const drawWave = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    particles.forEach((particle, index) => {
      if (index === 0) {
        ctx.moveTo(particle.x, particle.y);
      } else {
        ctx.lineTo(particle.x, particle.y);
      }
    });
    ctx.strokeStyle = 'hsl(var(--primary))';
    ctx.stroke();
  }, [particles, width, height]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    updateParticles();
    drawWave(ctx);

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawWave]);

  useEffect(() => {
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    particles.forEach((particle, index) => {
      const distance = Math.abs(particle.x - x);
      if (distance < 50) {
        const impact = (1 - distance / 50) * 300;
        particle.velocity += (y - particle.y) * impact * 0.02;
      }
    });
  }, [particles]);

  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className="w-full cursor-pointer" 
      onMouseMove={handleMouseMove}
    />
  );
};

export default React.memo(SoundWave);