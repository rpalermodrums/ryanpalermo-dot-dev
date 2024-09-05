class Particle {
  getColor(): string | CanvasGradient | CanvasPattern {
    throw new Error('Method not implemented.');
  }
  updateColorProgress(increment: number) {
    this.colorProgress = Math.min(this.colorProgress + increment, 1);
    this.color = this.getColor();
  }
  x: number;
  y: number;
  baseY: number;
  velocity: number;
  amplitude: number;
  frequency: number;
  phase: number;
  color: string | CanvasGradient | CanvasPattern;
  targetColor: string;
  colorTransition: number;
  colorProgress: number;
  
  constructor(x: number, y: number, amplitude: number, frequency: number, phase: number) {
    this.x = x;
    this.baseY = y;
    this.y = y;
    this.velocity = 0;
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.phase = phase;
    this.color = 'black' as string | CanvasGradient | CanvasPattern;
    this.targetColor = 'black';
    this.colorTransition = 0;
    this.colorProgress = 0;
  }

  update(time: number, dampening: number, tension: number) {
    const targetY = this.baseY + Math.sin(time * this.frequency + this.phase) * this.amplitude;
    const distance = targetY - this.y;
    const acceleration = distance * tension - this.velocity * dampening;
    
    this.velocity += acceleration;
    this.y += this.velocity;

    if (this.colorTransition > 0) {
      this.colorTransition -= 0.02;
      this.color = this.lerpColor('black', this.targetColor, 1 - this.colorTransition);
    } else {
      this.color = 'black';
    }
  }

  applyRipple(clickX: number, clickStrength: number) {
    const distance = Math.abs(this.x - clickX);
    const impact = Math.max(0, 1 - distance / 100) * clickStrength;
    this.velocity += impact;
    this.targetColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.colorTransition = 1;
  }

  private lerpColor(a: string, b: string, amount: number) {
    const ah = parseInt(a.replace(/#/g, ''), 16);
    const ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff;
    const bh = parseInt(b.replace(/#/g, ''), 16);
    const br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff;
    const rr = ar + amount * (br - ar);
    const rg = ag + amount * (bg - ag);
    const rb = ab + amount * (bb - ab);

    return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1)}`;
  }
}

export default Particle;