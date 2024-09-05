import { vi } from "vitest";

class AudioContextMock {
  createAnalyser() {
    return {
      connect: vi.fn(),
      disconnect: vi.fn(),
      fftSize: 0,
      getByteFrequencyData: vi.fn(),
    };
  }

  createMediaElementSource() {
    return {
      connect: vi.fn(),
    };
  }
}

export default AudioContextMock;
