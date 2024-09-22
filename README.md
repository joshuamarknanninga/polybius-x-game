# Xenotrix

**Xenotrix** is a fast-paced, visually stimulating game inspired by the urban legend of Polybius. Navigate through a dynamically changing maze, avoid obstacles, collect power-ups, and achieve the highest score possible.

## Features

- **Visual Effects:**
  - Neon-inspired colors with dynamic flashing backgrounds.
  - Motion blur effect for an intense atmosphere.
  
- **Sound Effects:**
  - Eerie background music.
  - Sound effects for collisions, power-ups, and scoring.
  
- **Advanced Obstacles:**
  - Obstacles of varying sizes and speeds.
  - Increasing difficulty over time.
  
- **Power-Ups:**
  - Collect power-ups to gain temporary invincibility or other abilities.
  
- **Levels and Progression:**
  - Difficulty ramps up as your score increases.
  
- **Responsive Design:**
  - Optimized for various screen sizes and devices.

## How to Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Xenotrix.git
Navigate to the Project Directory:

bash
Copy code
cd Xenotrix
Open index.html in Your Browser:

You can simply double-click the index.html file or use a local server for a better experience.
Assets
Ensure that all assets (audio, images, fonts) are placed in their respective folders within the assets directory.

Audio Files:

background.mp3: Background music.
collision.mp3: Sound when a collision occurs.
powerup.mp3: Sound when a power-up is collected.
score.mp3: Sound when scoring.
Images:

player.png: Player sprite.
Fonts:

neon.ttf: Custom font for enhanced aesthetics.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Inspired by the Polybius urban legend.
Thanks to OpenAI for assistance in game development.
markdown
Copy code

---

## Additional Enhancements Details

### Visual Effects

1. **Flashing Backgrounds:**
   - Implemented by toggling the canvas background color based on the score.
   - Creates a dynamic and intense visual experience.

2. **Motion Blur:**
   - Achieved by overlaying a semi-transparent black rectangle (`rgba(0, 0, 0, 0.1)`) on each frame.
   - Gives the illusion of motion blur as objects move quickly.

3. **Player Glow:**
   - When the player collects a power-up, a glow effect is applied using `shadowColor` and `shadowBlur`.

### Sound Effects

- **Background Music:**
  - Continuous looping to maintain an eerie atmosphere.
  
- **Collision Sound:**
  - Played when the player collides with an obstacle (unless invincible).
  
- **Power-Up Sound:**
  - Played when the player collects a power-up.
  
- **Score Sound:**
  - Played when the player gains points.

**Note:** Ensure you have the corresponding audio files in the `assets/audio` folder.

### Advanced Obstacles

- **Variety:**
  - Obstacles vary in size, speed, and color.
  
- **Dynamic Difficulty:**
  - Over time, obstacles increase in speed to raise the game's difficulty level.
  
- **Collision Handling:**
  - If the player is invincible (powered up), collisions with obstacles grant additional points instead of ending the game.

### Power-Ups

- **Types:**
  - Currently implemented as `speed` power-ups that grant temporary invincibility.
  
- **Duration:**
  - Power-ups last for a specified duration (e.g., 5 seconds).
  
- **Visual Indicators:**
  - Player changes color and gains a glow effect when powered up.

### Levels and Progression

- **Score-Based Progression:**
  - The game's difficulty increases as the player's score rises.
  
- **Dynamic Obstacle Speed:**
  - Obstacles speed up over time, requiring quicker reflexes.

### Responsive Design

- **Canvas Scaling:**
  - The canvas resizes based on the browser window while maintaining the aspect ratio.
  
- **UI Adjustments:**
  - UI elements scale appropriately on different screen sizes.

---

## Final Thoughts

By following the above structure and implementing the provided code, you'll create a comprehensive and engaging **Xenotrix** game that captures the mysterious and challenging essence of the Polybius legend. Feel free to further customize and expand the game by adding new features, enhancing visuals, or integrating more complex game mechanics.

Happy Coding!