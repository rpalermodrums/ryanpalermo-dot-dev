import { vi } from "vitest";

const mockContext2D = {
  clearRect: vi.fn(),
  moveTo: vi.fn(),
  closePath: vi.fn(),
  createLinearGradient: vi.fn(() => ({
    addColorStop: vi.fn(),
  })),
  getContext: vi.fn(() => mockContext2D),
  getColor: vi.fn(),
  lineTo: vi.fn(),
  stroke: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  fillStyle: '',
};

export const mockCanvas = {
  getContext: vi.fn(() => mockContext2D),
  width: 0,
  height: 0,
};

export const mockCanvasContext = mockContext2D;