import React, { useEffect, useRef, useState, useCallback } from 'react';
import Particle from '../utils/Particle';

interface SoundWaveProps {
  width: number;
  height: number;
  className: string;
  colorProgress: number;
  onFileUpload: (file: File) => void;
}

const SoundWave: React.FC<SoundWaveProps> = React.memo(({ width, height, onFileUpload }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [tempo, setTempo] = useState(1);
  const [colorProgress, setColorProgress] = useState(0);
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
    
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    particles.forEach((particle, index) => {
      gradient.addColorStop(index / particles.length, particle.getColor());
    });
    ctx.fillStyle = gradient;
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
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw particles
    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = particle.getColor();
      ctx.fill();
    });
  }, [particles, width, height]);

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

  const handleClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;

    particles.forEach((particle) => {
      particle.applyRipple(x, 20);
    });
    setColorProgress(prev => Math.min(prev + 0.1, 1));
    particles.forEach(particle => particle.updateColorProgress(0.1));
  }, [particles]);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  }, [onFileUpload]);

  return (
    <div>
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height} 
        className="w-full cursor-pointer" 
        onClick={handleClick}
        aria-label="Interactive sound wave visualization"
        role="img"
      />
      <div className="mt-4 flex justify-center space-x-4 items-center">
        <label htmlFor="tempoSlider" className="sr-only">Adjust tempo</label>
        <input 
          id="tempoSlider"
          type="range" 
          min="0.5" 
          max="2" 
          step="0.1" 
          value={tempo} 
          onChange={(e) => setTempo(parseFloat(e.target.value))}
          className="w-32"
          aria-valuemin={0.5}
          aria-valuemax={2}
          aria-valuenow={tempo}
        />
        <span>Tempo: {tempo.toFixed(1)}x</span>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileUpload}
          className="hidden"
          id={`fileUpload-${width}-${height}`}
        />
        <label
          htmlFor={`fileUpload-${width}-${height}`}
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Upload Audio
        </label>
      </div>
    </div>
  );
});

export default React.memo(SoundWave);