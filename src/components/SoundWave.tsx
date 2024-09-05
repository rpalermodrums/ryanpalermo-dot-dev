import React, { useEffect, useRef, useState, useCallback } from 'react';
import Particle from '../utils/Particle';

interface SoundWaveProps {
  width: number;
  height: number;
  color: string;
}

const SoundWave: React.FC<SoundWaveProps> = ({ width, height, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [tempo, setTempo] = useState(1);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  const initializeParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const numParticles = width;
    for (let i = 0; i < numParticles; i++) {
      newParticles.push(new Particle(
        i, 
        height / 2, 
        height / 4, 
        0.02, 
        i * 0.1
      ));
    }
    setParticles(newParticles);
  }, [width, height]);

  useEffect(() => {
    initializeParticles();
  }, [initializeParticles]);

  const updateParticles = useCallback((time: number) => {
    particles.forEach(particle => {
      particle.update(time * tempo, 0.03, 0.02);
    });
  }, [particles, tempo]);

  const drawWave = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, width, height);
    
    // Draw filled area
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    particles.forEach((particle) => {
      ctx.lineTo(particle.x, particle.y);
    });
    ctx.lineTo(width, height / 2);
    ctx.closePath();
    ctx.fillStyle = `${color}33`; // Add transparency
    ctx.fill();

    // Draw wave line
    ctx.beginPath();
    particles.forEach((particle, index) => {
      if (index === 0) {
        ctx.moveTo(particle.x, particle.y);
      } else {
        ctx.lineTo(particle.x, particle.y);
      }
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [particles, width, height, color]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    timeRef.current += 0.016; // Assuming 60fps
    updateParticles(timeRef.current);
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

  const changeTempo = (newTempo: number) => {
    setTempo(newTempo);
  };

  return (
    <div>
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height} 
        className="w-full cursor-pointer" 
        onMouseMove={handleMouseMove}
      />
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={() => changeTempo(tempo / 2)} className="px-4 py-2 bg-primary text-white rounded">1/2x</button>
        <input 
          type="range" 
          min="0.5" 
          max="2" 
          step="0.1" 
          value={tempo} 
          onChange={(e) => changeTempo(parseFloat(e.target.value))}
          className="w-32"
        />
        <button onClick={() => changeTempo(tempo * 2)} className="px-4 py-2 bg-primary text-white rounded">2x</button>
      </div>
    </div>
  );
};

export default React.memo(SoundWave);