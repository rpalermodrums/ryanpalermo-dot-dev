export default class Particle {
  x: number;
  y: number;
  amplitude: number;
  frequency: number;
  phase: number;
  color: string;
  colorProgress: number;

  constructor(x: number, y: number, amplitude: number, frequency: number, phase: number) {
    this.x = x;
    this.y = y;
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.phase = phase;
    this.color = 'rgb(0, 0, 255)'; // Default color
    this.colorProgress = 0;
  }

  update(time: number, frequencyFactor: number, amplitudeFactor: number) {
    this.y = this.amplitude * Math.sin(this.frequency * time + this.phase) + this.y;
    this.frequency += frequencyFactor;
    this.amplitude += amplitudeFactor;
  }

  applyRipple(centerX: number, strength: number) {
    const distance = Math.abs(this.x - centerX);
    const effect = Math.max(0, 1 - distance / 100) * strength;
    this.amplitude += effect;
  }

  updateColorProgress(increment: number) {
    this.colorProgress = Math.min(this.colorProgress + increment, 1);
    this.updateColor();
  }

  updateColor() {
    const r = Math.floor(255 * this.colorProgress);
    const g = Math.floor(255 * (1 - this.colorProgress));
    const b = Math.floor(255 * (0.5 - Math.abs(0.5 - this.colorProgress)));
    this.color = `rgb(${r}, ${g}, ${b})`;
  }

  getColor(): string {
    return this.color;
  }
}