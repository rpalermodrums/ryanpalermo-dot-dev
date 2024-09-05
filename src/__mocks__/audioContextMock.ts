class AudioContextMock {
  createAnalyser() {
    return {
      connect: jest.fn(),
      disconnect: jest.fn(),
      fftSize: 0,
      getByteFrequencyData: jest.fn(),
    };
  }

  createMediaElementSource() {
    return {
      connect: jest.fn(),
    };
  }
}

export default AudioContextMock;