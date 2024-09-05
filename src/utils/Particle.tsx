class Particle {
    x: number;
    y: number;
    baseY: number;
    velocity: number;
    amplitude: number;
    
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.baseY = y;
      this.velocity = 0;
      this.amplitude = Math.random() * 20 + 10;
    }
  
    update(dampening: number, tension: number) {
      const distance = this.baseY - this.y;
      const acceleration = distance * tension - this.velocity * dampening;
      
      this.velocity += acceleration;
      this.y += this.velocity;
    }
  }
  
  export default Particle;