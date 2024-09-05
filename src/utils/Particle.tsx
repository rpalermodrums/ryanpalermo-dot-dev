export default class Particle {
  x: number;
  y: number;
  amplitude: number;
  frequency: number;
  phase: number;
  colorProgress: number;
  private _baseColor: string;

  constructor(
    x: number,
    y: number,
    amplitude: number,
    frequency: number,
    phase: number
  ) {
    this._baseColor = '#0000FF';
    this.colorProgress = 0;
    this.x = x;
    this.y = y;
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.phase = phase;
  }

  update(time: number) {
    const baseY = this.y;
    this.y = baseY + this.amplitude * Math.sin(this.frequency * time + this.phase);
  }

  applyRipple(centerX: number, strength: number) {
    const distance = Math.abs(this.x - centerX);
    const effect = Math.max(0, 1 - distance / 100) * strength;
    this.amplitude += effect;
  }

  updateColorProgress(increment: number) {
    this.colorProgress = Math.min(this.colorProgress + increment, 1);
  }

  getColor(): string {
    const baseColor = this.hexToRgb(this._baseColor);
    const targetColor = { r: 255, g: 255, b: 255 }; // White

    const r = Math.floor(baseColor.r + (targetColor.r - baseColor.r) * this.colorProgress);
    const g = Math.floor(baseColor.g + (targetColor.g - baseColor.g) * this.colorProgress);
    const b = Math.floor(baseColor.b + (targetColor.b - baseColor.b) * this.colorProgress);

    return `rgb(${r}, ${g}, ${b})`;
  }

  setBaseColor(color: string) {
    this._baseColor = color;
  }

  private hexToRgb(hex: string): { r: number, g: number, b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }
}