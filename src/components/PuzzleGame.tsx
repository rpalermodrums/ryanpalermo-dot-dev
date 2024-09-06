import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import DJDeck from "./DJDeck";

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
		const initialPuzzle = Array.from(
			{ length: TOTAL_TILES - 1 },
			(_, i) => i + 1,
		);
		initialPuzzle.push(0);
		shuffleArray(initialPuzzle);
		return initialPuzzle;
	});
	const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleTileClick = useCallback(
		(index: number) => {
			const emptyIndex = puzzleState.indexOf(0);
			if (isAdjacent(index, emptyIndex)) {
				const newPuzzleState = [...puzzleState];
				[newPuzzleState[index], newPuzzleState[emptyIndex]] = [
					newPuzzleState[emptyIndex],
					newPuzzleState[index],
				];
				setPuzzleState(newPuzzleState);
				checkPuzzleSolved(newPuzzleState);
			}
		},
		[puzzleState],
	);

	const isAdjacent = (index1: number, index2: number) => {
		const row1 = Math.floor(index1 / PUZZLE_SIZE);
		const col1 = index1 % PUZZLE_SIZE;
		const row2 = Math.floor(index2 / PUZZLE_SIZE);
		const col2 = index2 % PUZZLE_SIZE;
		return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
	};

	const checkPuzzleSolved = (state: number[]) => {
		const solved =
			state.slice(0, -1).every((num, index) => num === index + 1) &&
			state[state.length - 1] === 0;
		setIsPuzzleSolved(solved);
	};

	const getPosition = (index: number) => {
		const row = Math.floor(index / PUZZLE_SIZE);
		const col = index % PUZZLE_SIZE;
		return { row, col };
	};

	// @biome-ignore lint/correctness/useExhaustiveDependencies: shuffleArray changes every time and should be excluded
	const resetPuzzle = useCallback(() => {
		const initialPuzzle = Array.from(
			{ length: TOTAL_TILES - 1 },
			(_, i) => i + 1,
		);
		initialPuzzle.push(0);
		// @biome-ignore-next-line lint/correctness/useExhaustiveDependencies: shuffleArray changes every time and should be excluded
		shuffleArray(initialPuzzle);
		setPuzzleState(initialPuzzle);
		setIsPuzzleSolved(false);
	}, []);

	useEffect(() => {
		if (isPuzzleSolved) {
			setShowSuccess(true);
			const timer = setTimeout(() => {
				setShowSuccess(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [isPuzzleSolved]);

	return (
		<>
			{!isPuzzleSolved || showSuccess ? (
				<div className="max-w-xs mx-auto">
					<h3 className="mb-4 text-xl font-semibold text-center text-gray-800 dark:text-white">
						Oooh what's behind this puzzle?!?
					</h3>
					<div
						className="relative grid grid-cols-3 gap-4 m-auto"
						style={{ width: "260px", height: "260px" }}
					>
						<AnimatePresence>
							{puzzleState.map((tile, index) => {
								const { row, col } = getPosition(index);
								return (
									<motion.button
										key={tile}
										className={`w-20 h-20 text-2xl font-bold absolute ${
											tile === 0
												? "bg-transparent"
												: "bg-melting-gold text-dreamscape-blue"
										} rounded-lg focus:outline-none transition-colors duration-300 hover:bg-surreal-coral`}
										onClick={() => handleTileClick(index)}
										disabled={tile === 0 || isPuzzleSolved}
										initial={false}
										animate={
											isPuzzleSolved
												? { scale: 0, x: 130, y: 130 }
												: {
														scale: 1,
														x: col * 88,
														y: row * 88,
													}
										}
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									>
										{tile !== 0 && tile}
									</motion.button>
								);
							})}
						</AnimatePresence>
						<AnimatePresence>
							{showSuccess && (
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
									className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg bg-opacity-90"
								>
									<motion.div
										className="mb-2 text-6xl"
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 0.5,
										}}
									>
										✅
									</motion.div>
									<p className="text-2xl font-bold text-green-600">
										Nice work! 🎉
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<button
						type="button"
						onClick={resetPuzzle}
						className="w-full px-4 py-2 mt-4 text-white transition-colors duration-300 rounded-lg bg-dreamscape-blue hover:bg-surreal-coral"
					>
						Reset Puzzle
					</button>
				</div>
			) : (
				<DJDeck />
			)}
		</>
	);
};

export default PuzzleGame;
