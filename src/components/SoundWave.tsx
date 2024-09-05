import React, { useEffect, useRef, useState, useCallback } from 'react';
import Particle from '../utils/Particle';
import TempoDetector from '../utils/TempoDetector';

interface SoundWaveProps {
  width: number;
  height: number;
  className: string;
  onFileUpload: (file: File) => void;
  bpm: number;
}

const SoundWave: React.FC<SoundWaveProps> = React.memo(({ width, height, onFileUpload, bpm }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const tempoDetectorRef = useRef<TempoDetector>(new TempoDetector());
  const [detectedTempo, setDetectedTempo] = useState<number | null>(null);
  const [tempoColor, setTempoColor] = useState('#0000FF'); // Default blue color

  const getColorProgress = useCallback((tempo: number) => {
    const minTempo = 60;
    const maxTempo = 180;
    return Math.min(Math.max((tempo - minTempo) / (maxTempo - minTempo), 0), 1);
  }, []);

  const [colorProgress, setColorProgress] = useState(getColorProgress(bpm));

  useEffect(() => {
    setColorProgress(getColorProgress(bpm));
  }, [bpm, getColorProgress]);

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
      particle.update(time * (bpm / 120));
    });
  }, [particles, bpm]);

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
    particles.forEach(particle => particle.updateColorProgress(colorProgress));
  }, [particles, colorProgress]);

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
      
      // Detect tempo
      await tempoDetectorRef.current.loadAudio(file);
      const tempo = await tempoDetectorRef.current.detectTempo();
      setDetectedTempo(tempo);
    }
  }, [onFileUpload]);

  const getTempoColor = useCallback((tempo: number) => {
    const minTempo = 60;
    const maxTempo = 180;
    const normalizedTempo = Math.max(minTempo, Math.min(maxTempo, tempo));
    const hue = 240 - ((normalizedTempo - minTempo) / (maxTempo - minTempo)) * 240;
    return `hsl(${hue}, 100%, 50%)`;
  }, []);

  useEffect(() => {
    if (detectedTempo) {
      const color = getTempoColor(detectedTempo);
      setTempoColor(color);
      particles.forEach(particle => particle.setBaseColor(color));
    }
  }, [detectedTempo, getTempoColor, particles]);

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
        style={{ background: `linear-gradient(to right, ${tempoColor}22, ${tempoColor}66)` }}
      />
      <div className="mt-4 flex justify-center space-x-4 items-center">
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
          style={{ backgroundColor: tempoColor }}
        >
          Upload Audio
        </label>
        {detectedTempo && (
          <span>Detected Tempo: {Math.round(detectedTempo)} BPM</span>
        )}
      </div>
    </div>
  );
});

export default React.memo(SoundWave);