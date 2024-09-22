// PowerUp.js

class PowerUp {
    constructor(canvasWidth) {
      this.size = 25;
      this.x = Math.random() * (canvasWidth - this.size);
      this.y = -this.size;
      this.speed = 2;
      this.color = '#ff0';
      this.type = 'speed'; // Types can be 'speed', 'invincibility', etc.
      this.duration = 5000; // Power-up duration in milliseconds
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x + this.size/2, this.y + this.size/2, this.size/2, 0, Math.PI * 2);
      ctx.fill();
    }
  
    update(deltaTime) {
      this.y += this.speed;
    }
  
    isOffScreen(canvasHeight) {
      return this.y > canvasHeight;
    }
  }
  