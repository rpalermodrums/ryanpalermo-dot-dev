export class Particle {
  // ... existing properties ...
  colorProgress: number;

  constructor(/* ... existing parameters ... */) {
    // ... existing initialization ...
    this.colorProgress = 0;
  }

  // ... existing methods ...

  updateColorProgress(increment: number) {
    this.colorProgress = Math.min(this.colorProgress + increment, 1);
  }

  getColor() {
    if (this.colorProgress === 0) {
      return 'rgba(255, 255, 255, 0.5)'; // Default white with opacity
    }
    const hue = this.colorProgress * 360;
    return `hsla(${hue}, 100%, 50%, 0.5)`;
  }
}