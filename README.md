
# Snake Game for Tizen TVs

This is a simple Snake game developed for Samsung Smart TVs using the Tizen platform. The game is built with HTML5 Canvas and JavaScript, offering a classic Snake game experience, where players control a snake and try to eat fruits to grow the snake without colliding with themselves.

## How to Play

- Control the snake using the arrow keys on your Samsung TV remote.
- The objective is to eat the fruit, which will increase the length of the snake.
- Avoid colliding with the snake's own body.
- The snake wraps around the edges of the screen.

## Controls

- **Left Arrow (◀)**: Move the snake left.
- **Up Arrow (▲)**: Move the snake up.
- **Right Arrow (▶)**: Move the snake right.
- **Down Arrow (▼)**: Move the snake down.

## Game Mechanics

- The game runs on an HTML5 Canvas element.
- The snake is made up of segments, and it grows longer each time it eats a fruit.
- The fruit is randomly placed on the grid, and when the snake eats it, the fruit relocates.
- The snake wraps around the canvas when it hits the edges.

### Main Files

- **index.html**: Contains the basic HTML structure and canvas element for the game.
- **game.js**: Handles the game logic, including snake movement, fruit placement, collision detection, and input controls.

## Installation

To install and run the game on a Samsung TV with Tizen:

1. Clone this repository to your development environment:
   ```bash
   git clone https://github.com/yourusername/tizen-snake-game.git
   ```
2. Open the project in Tizen Studio.
3. Build the project and deploy it to a Samsung Smart TV (ensure your TV is connected in developer mode).

## Development

This project uses standard JavaScript for game logic and runs directly in the browser environment supported by Tizen. You can modify the game logic and visuals by editing the `game.js` file.

### Key Functions in the Code:

- **setup()**: Initializes the game, canvas, and objects.
- **Snake**:
  - **draw()**: Draws the snake and updates its position on the canvas.
  - **update()**: Updates the snake's movement.
  - **changeDirection()**: Changes the direction of the snake based on user input.
  - **eat()**: Checks if the snake has eaten a fruit and increases its length.
  - **checkCollision()**: Detects if the snake collides with itself.
- **Fruit**:
  - **pickLocation()**: Randomly picks a location for the fruit.
  - **draw()**: Draws the fruit on the canvas.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy playing the game!
