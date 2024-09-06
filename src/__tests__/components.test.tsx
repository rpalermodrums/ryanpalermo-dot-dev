import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi, beforeAll } from "vitest";
import DJDeck from "../components/DJDeck";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import PuzzleGame from "../components/PuzzleGame";
import SoundWave from "../components/SoundWave";
import AudioContextMock from "../__mocks__/audioContextMock";
import { mockCanvas } from "../__mocks__/canvasMock";

// Add this at the top of the file
declare global {
	interface Window {
		webkitAudioContext: typeof AudioContext;
	}
}

// Mock the hooks
vi.mock("../hooks/useAudioDeck", () => ({
	default: () => ({
		audioSources: [null, null],
		bpms: [120, 120],
		handleFileUpload: vi.fn(),
		handleBpmChange: vi.fn(() => vi.fn()),
	}),
}));

vi.mock("../hooks/useParticles", () => ({
	default: () => ({
		particles: [],
		updateParticles: vi.fn(),
	}),
}));

beforeAll(() => {
	// Mock AudioContext
	window.AudioContext = AudioContextMock as any;
	window.webkitAudioContext = AudioContextMock as any;

	// Mock URL.createObjectURL
	window.URL.createObjectURL = vi.fn(() => "mock-url");

	// Mock HTMLCanvasElement
	Object.defineProperty(window.HTMLCanvasElement.prototype, "getContext", {
		value: mockCanvas.getContext,
	});
});

describe("Components", () => {
	describe("DJDeck", () => {
		it("renders two SoundWave components", () => {
			render(<DJDeck />);
			const soundWaves = screen.getAllByRole("img", {
				name: /Interactive sound wave visualization/i,
			});
			expect(soundWaves).toHaveLength(2);
		});
	});

	describe("Layout", () => {
		it("renders navigation and footer", () => {
			render(
				<BrowserRouter>
					<Layout>
						<div>Test Content</div>
					</Layout>
				</BrowserRouter>,
			);
			expect(screen.getByText("Ryan Palermo")).toBeTruthy();
			expect(screen.getByText(/All rights reserved/)).toBeTruthy();
		});
	});

	describe("Navigation", () => {
		it("renders navigation links", () => {
			render(
				<BrowserRouter>
					<Navigation darkMode={false} toggleDarkMode={() => {}} />
				</BrowserRouter>,
			);
			expect(screen.getByText("Home")).toBeTruthy();
			expect(screen.getByText("Projects")).toBeTruthy();
			expect(screen.getByText("Thoughts")).toBeTruthy();
			expect(screen.getByText("Contact")).toBeTruthy();
		});
	});

	describe("PuzzleGame", () => {
		it("renders puzzle tiles", () => {
			render(<PuzzleGame />);
			const tiles = screen.getAllByRole("button");
			expect(tiles).toHaveLength(10); // 3x3 grid plus the empty tile and reset button
		});
	});

	describe("SoundWave", () => {
		it("renders canvas and upload button", () => {
			render(
				<SoundWave
					width={400}
					height={200}
					className=""
					onFileUpload={() => {}}
					bpm={120}
				/>,
			);
			expect(
				screen.getByRole("img", {
					name: /Interactive sound wave visualization/i,
				}),
			).toBeTruthy();
			expect(screen.getByText("Upload Audio")).toBeTruthy();
		});
	});
});
