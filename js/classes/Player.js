// Player.js

class Player {
    constructor(canvasWidth, canvasHeight) {
      this.size = 30;
      this.x = canvasWidth / 2 - this.size / 2;
      this.y = canvasHeight - this.size - 10;
      this.speed = 5;
      this.color = '#0f0';
      this.image = new Image();
      this.image.src = 'assets/images/player.png'; // Ensure you have a player.png in assets/images
      this.poweredUp = false;
      this.powerUpTimer = 0;
    }
  
    draw(ctx) {
      if (this.poweredUp) {
        ctx.fillStyle = '#ff0';
        ctx.shadowColor = '#ff0';
        ctx.shadowBlur = 20;
      } else {
        ctx.fillStyle = this.color;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }
      // ctx.fillRect(this.x, this.y, this.size, this.size); // Uncomment if using colored square
      if (this.image.complete) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
      } else {
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }
  
    move(direction, canvasWidth, canvasHeight) {
      switch(direction) {
        case 'ArrowUp':
          if (this.y > 0) this.y -= this.speed;
          break;
        case 'ArrowDown':
          if (this.y + this.size < canvasHeight) this.y += this.speed;
          break;
        case 'ArrowLeft':
          if (this.x > 0) this.x -= this.speed;
          break;
        case 'ArrowRight':
          if (this.x + this.size < canvasWidth) this.x += this.speed;
          break;
      }
    }
  
    activatePowerUp(duration) {
      this.poweredUp = true;
      this.powerUpTimer = duration;
    }
  
    update(deltaTime) {
      if (this.poweredUp) {
        this.powerUpTimer -= deltaTime;
        if (this.powerUpTimer <= 0) {
          this.poweredUp = false;
          this.powerUpTimer = 0;
        }
      }
    }
  }
  