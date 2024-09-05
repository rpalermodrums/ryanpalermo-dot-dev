import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DJDeck from './DJDeck';

const PUZZLE_SIZE = 3;
const TOTAL_TILES = PUZZLE_SIZE * PUZZLE_SIZE;

const PuzzleGame: React.FC = () => {
  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const [puzzleState, setPuzzleState] = useState<number[]>(() => {
    const initialPuzzle = Array.from({ length: TOTAL_TILES - 1 }, (_, i) => i + 1);
    initialPuzzle.push(0);
    shuffleArray(initialPuzzle);
    return initialPuzzle;
  });
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);

  const handleTileClick = useCallback((index: number) => {
    const emptyIndex = puzzleState.indexOf(0);
    if (isAdjacent(index, emptyIndex)) {
      const newPuzzleState = [...puzzleState];
      [newPuzzleState[index], newPuzzleState[emptyIndex]] = [newPuzzleState[emptyIndex], newPuzzleState[index]];
      setPuzzleState(newPuzzleState);
      checkPuzzleSolved(newPuzzleState);
    }
  }, [puzzleState]);

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
    <>
      {!isPuzzleSolved ? (
        <div className="max-w-xs mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Oooh what's behind this puzzle?!?</h3>
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
    </>
  );
};

export default PuzzleGame;