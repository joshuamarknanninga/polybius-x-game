// utils.js

// Function to get a random color from a palette
function getRandomColor() {
    const colors = ['#ff0', '#0ff', '#f0f', '#f00', '#0f0', '#00f', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Function to load audio
  function loadAudio(src) {
    const audio = new Audio(src);
    audio.setAttribute('preload', 'auto');
    return audio;
  }
  
  // Function to detect collision between two rectangles
  function collision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.size > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.size > rect2.y;
  }
  