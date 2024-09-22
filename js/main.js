// main.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game Variables
let player;
let obstacles = [];
let powerUps = [];
let score = 0;
let gameOver = false;
let gameInterval;
let obstacleInterval;
let powerUpInterval;
let difficultyIncreaseInterval = 2000; // Increase difficulty every 2 seconds
let lastTime = 0;

// Audio Assets
const backgroundMusic = loadAudio('assets/audio/background.mp3');
backgroundMusic.loop = true;
const collisionSound = loadAudio('assets/audio/collision.mp3');
const powerUpSound = loadAudio('assets/audio/powerup.mp3');
const scoreSound = loadAudio('assets/audio/score.mp3');

// Keyboard Input
const keys = {};

// Event Listeners for Keyboard
window.addEventListener('keydown', function(e) {
  keys[e.key] = true;
});

window.addEventListener('keyup', function(e) {
  keys[e.key] = false;
});

// Start Game Function
function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  resetGame();
  backgroundMusic.currentTime = 0;
  backgroundMusic.play();
  gameInterval = requestAnimationFrame(gameLoop);
  obstacleInterval = setInterval(addObstacle, 1500);
  powerUpInterval = setInterval(addPowerUp, 10000);
  setInterval(increaseDifficulty, difficultyIncreaseInterval);
}

// Restart Game Function
function restartGame() {
  document.getElementById('gameOverScreen').style.display = 'none';
  startGame();
}

// Reset Game Variables
function resetGame() {
  player = new Player(canvas.width, canvas.height);
  obstacles = [];
  powerUps = [];
  score = 0;
  gameOver = false;
  lastTime = performance.now();
}

// Add Obstacle
function addObstacle() {
  obstacles.push(new Obstacle(canvas.width));
}

// Add Power-Up
function addPowerUp() {
  powerUps.push(new PowerUp(canvas.width));
}

// Increase Difficulty
function increaseDifficulty() {
  obstacles.forEach(ob => ob.speed += 0.5);
  // Optionally, decrease the interval between obstacles
}

// Handle Player Movement
function handleMovement(deltaTime) {
  for (let key in keys) {
    if (keys[key]) {
      player.move(key, canvas.width, canvas.height);
    }
  }
  player.update(deltaTime);
}

// Game Loop
function gameLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  if (gameOver) return;

  // Visual Effects: Flashing Background
  if (Math.floor(score / 50) % 2 === 0) {
    canvas.style.backgroundColor = '#111';
  } else {
    canvas.style.backgroundColor = '#222';
  }

  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Handle Player Movement
  handleMovement(deltaTime);

  // Draw and Update Player
  player.draw(ctx);

  // Draw and Update Obstacles
  obstacles.forEach((ob, index) => {
    ob.update(deltaTime);
    ob.draw(ctx);

    // Collision Detection
    if (collision(player, ob)) {
      if (!player.poweredUp) {
        collisionSound.play();
        endGame();
      } else {
        // Maybe destroy obstacle or ignore
        obstacles.splice(index, 1);
        score += 2;
        scoreSound.play();
      }
    }

    // Remove Off-Screen Obstacles
    if (ob.isOffScreen(canvas.height)) {
      obstacles.splice(index, 1);
      score += 1;
      scoreSound.play();
    }
  });

  // Draw and Update Power-Ups
  powerUps.forEach((pu, index) => {
    pu.update(deltaTime);
    pu.draw(ctx);

    // Collision Detection with Power-Up
    if (collision(player, pu)) {
      powerUpSound.play();
      player.activatePowerUp(pu.duration);
      powerUps.splice(index, 1);
      score += 5;
    }

    // Remove Off-Screen Power-Ups
    if (pu.isOffScreen(canvas.height)) {
      powerUps.splice(index, 1);
    }
  });

  // Draw Score
  ctx.fillStyle = '#fff';
  ctx.font = '20px Arial';
  ctx.fillText('Score: ' + score, 10, 30);

  // Apply Motion Blur Effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Request Next Frame
  gameInterval = requestAnimationFrame(gameLoop);
}

// End Game Function
function endGame() {
  gameOver = true;
  backgroundMusic.pause();
  cancelAnimationFrame(gameInterval);
  clearInterval(obstacleInterval);
  clearInterval(powerUpInterval);
  document.getElementById('finalScore').innerText = 'Your Score: ' + score;
  document.getElementById('gameOverScreen').style.display = 'block';
}

// Collision Detection
// Already included in utils.js as collision()

// Responsive Canvas
function resizeCanvas() {
  const aspectRatio = 4 / 3;
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;

  if (newWidth / newHeight > aspectRatio) {
    newWidth = newHeight * aspectRatio;
  } else {
    newHeight = newWidth / aspectRatio;
  }

  canvas.style.width = `${newWidth}px`;
  canvas.style.height = `${newHeight}px`;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call
