import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeAll } from "vitest";
import useAudioDeck from "../hooks/useAudioDeck";
import useParticleBackground from "../hooks/useParticleBackground";
import useParticles from "../hooks/useParticles";
import useTempoDetection from "../hooks/useTempoDetection";
import AudioContextMock from "../__mocks__/audioContextMock";
import { mockCanvas, mockCanvasContext } from "../__mocks__/canvasMock";

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

describe("Hooks", () => {
	describe("useAudioDeck", () => {
		it("should initialize with default values", () => {
			const { result } = renderHook(() => useAudioDeck());
			expect(result.current.audioSources).toEqual([null, null]);
			expect(result.current.bpms).toEqual([120, 120]);
		});

		it("should handle file upload", async () => {
			const { result } = renderHook(() => useAudioDeck());
			const file = new File([""], "test.mp3", { type: "audio/mpeg" });

			await act(async () => {
				await result.current.handleFileUpload(0)(file);
			});

			expect(result.current.audioSources[0]).not.toBeNull();
		});
	});

	describe("useParticleBackground", () => {
		it("should set up canvas and animation", () => {
			const canvasRef = { current: document.createElement("canvas") };
			const { result } = renderHook(() => useParticleBackground(canvasRef));

			expect(result.current).toBeUndefined();
			expect(mockCanvas.getContext).toHaveBeenCalledWith("2d");
			expect(mockCanvasContext.clearRect).toHaveBeenCalled();
			expect(mockCanvasContext.beginPath).toHaveBeenCalled();
			expect(mockCanvasContext.arc).toHaveBeenCalled();
			expect(mockCanvasContext.fill).toHaveBeenCalled();
		});
	});

	describe("useParticles", () => {
		it("should initialize particles", () => {
			const { result } = renderHook(() => useParticles(100, 100, 120));
			expect(result.current.particles.length).toBe(100);
		});

		it("should update particles", () => {
			const { result } = renderHook(() => useParticles(100, 100, 120));
			const initialPositions = result.current.particles.map((p) => p.y);

			act(() => {
				result.current.updateParticles(1);
			});

			const updatedPositions = result.current.particles.map((p) => p.y);
			expect(updatedPositions).not.toEqual(initialPositions);
		});
	});

	describe("useTempoDetection", () => {
		it("should detect tempo", async () => {
			const { result } = renderHook(() => useTempoDetection());
			const file = new File([""], "test.mp3", { type: "audio/mpeg" });

			// Mock the TempoDetector
			vi.mock("../utils/TempoDetector", () => ({
				default: class {
					loadAudio = vi.fn();
					detectTempo = vi.fn().mockResolvedValue(128);
				},
			}));

			await act(async () => {
				await result.current.detectTempo(file);
			});

			expect(result.current.detectedTempo).toBe(128);
		});
	});
});
