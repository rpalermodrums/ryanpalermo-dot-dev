import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DJDeck from '../components/DJDeck';

const PUZZLE_SIZE = 3;
const TOTAL_TILES = PUZZLE_SIZE * PUZZLE_SIZE;

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [puzzleState, setPuzzleState] = useState<number[]>([]);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);

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

    // Initialize puzzle
    const initialPuzzle = Array.from({ length: TOTAL_TILES - 1 }, (_, i) => i + 1);
    initialPuzzle.push(0); // 0 represents the empty tile
    shuffleArray(initialPuzzle);
    setPuzzleState(initialPuzzle);
  }, []);

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleTileClick = (index: number) => {
    const emptyIndex = puzzleState.indexOf(0);
    if (isAdjacent(index, emptyIndex)) {
      const newPuzzleState = [...puzzleState];
      [newPuzzleState[index], newPuzzleState[emptyIndex]] = [newPuzzleState[emptyIndex], newPuzzleState[index]];
      setPuzzleState(newPuzzleState);
      checkPuzzleSolved(newPuzzleState);
    }
  };

  const isAdjacent = (index1: number, index2: number) => {
    const row1 = Math.floor(index1 / PUZZLE_SIZE);
    const col1 = index1 % PUZZLE_SIZE;
    const row2 = Math.floor(index2 / PUZZLE_SIZE);
    const col2 = index2 % PUZZLE_SIZE;
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
  };

  const checkPuzzleSolved = (state: number[]) => {
    const solved = state.slice(0, -1).every((num, index) => num === index + 1) && state[state.length - 1] === 0;
    setIsPuzzleSolved(solved);
  };

  const getPosition = (index: number) => {
    const row = Math.floor(index / PUZZLE_SIZE);
    const col = index % PUZZLE_SIZE;
    return { row, col };
  };

  return (
    <div className="relative min-h-screen">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-t from-persistence-purple to-dreamscape-blue bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
          <h1 className="text-6xl font-bold mb-4 text-center text-canvas-cream">Ryan Palermo</h1>
          <h2 className="text-3xl font-semibold mb-8 text-center text-melting-gold">I build software and make music.</h2>
        </div>
        <div className="mt-8">
          {!isPuzzleSolved ? (
            <div className="max-w-xs mx-auto">
              <h3 className="text-xl text-gray-800 font-semibold mb-4 text-center text-canvas-cream">Oooh what's behind this puzzle?!?</h3>
              <div className="grid grid-cols-3 gap-4 relative m-auto" style={{ width: '260px', height: '260px' }}>
                <AnimatePresence>
                  {puzzleState.map((tile, index) => {
                    const { row, col } = getPosition(index);
                    return (
                      <motion.button
                        key={tile}
                        className={`w-20 h-20 text-2xl font-bold absolute ${
                          tile === 0 ? 'bg-transparent' : 'bg-melting-gold text-dreamscape-blue'
                        } rounded-lg focus:outline-none transition-colors duration-300 hover:bg-surreal-coral`}
                        onClick={() => handleTileClick(index)}
                        disabled={tile === 0}
                        initial={false}
                        animate={{
                          x: col * 88,
                          y: row * 88,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        {tile !== 0 && tile}
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <DJDeck />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;