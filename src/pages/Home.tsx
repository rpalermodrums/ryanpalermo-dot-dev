import React, { useRef } from 'react';
import PuzzleGame from '../components/PuzzleGame';
import useParticleBackground from '../hooks/useParticleBackground';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleBackground(canvasRef);

  return (
    <div className="relative min-h-screen">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-t from-persistence-purple to-dreamscape-blue bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
          <h1 className="text-6xl font-bold mb-4 text-center text-canvas-cream">Ryan Palermo</h1>
          <h2 className="text-3xl font-semibold mb-8 text-center text-melting-gold">I build software and make music.</h2>
        </div>
        <div className="mt-8">
          <PuzzleGame />
        </div>
      </div>
    </div>
  );
};

export default Home;