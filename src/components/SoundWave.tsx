import React, { useEffect, useRef } from 'react';

interface SoundWaveProps {
  width: number;
  height: number;
}

const SoundWave: React.FC<SoundWaveProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      
      for (let i = 0; i < width; i++) {
        const x = i;
        const y = height / 2 + Math.sin((i + time) * 0.05) * height / 4;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'hsl(var(--primary))';
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} className="w-full" />;
};

export default SoundWave;