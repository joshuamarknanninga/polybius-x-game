// Obstacle.js

class Obstacle {
    constructor(canvasWidth) {
      this.width = Math.random() * 50 + 20;
      this.height = Math.random() * 30 + 20;
      this.x = Math.random() * (canvasWidth - this.width);
      this.y = -this.height;
      this.speed = Math.random() * 3 + 2;
      this.color = getRandomColor();
      this.type = 'normal'; // Future expansion for different obstacle types
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    update(deltaTime) {
      this.y += this.speed;
    }
  
    isOffScreen(canvasHeight) {
      return this.y > canvasHeight;
    }
  }
  