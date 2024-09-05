class Particle {
  x: number;
  y: number;
  baseY: number;
  velocity: number;
  amplitude: number;
  frequency: number;
  phase: number;
  
  constructor(x: number, y: number, amplitude: number, frequency: number, phase: number) {
    this.x = x;
    this.baseY = y;
    this.y = y;
    this.velocity = 0;
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.phase = phase;
  }

  update(time: number, dampening: number, tension: number) {
    const targetY = this.baseY + Math.sin(time * this.frequency + this.phase) * this.amplitude;
    const distance = targetY - this.y;
    const acceleration = distance * tension - this.velocity * dampening;
    
    this.velocity += acceleration;
    this.y += this.velocity;
  }
}

export default Particle;