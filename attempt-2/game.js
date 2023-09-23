import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";

const gameBoard = document.getElementById("game-board");

let lastRenderTime = 0;
// we are making an event loop here.
function main(currentTime) {
   window.requestAnimationFrame(main);
   const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
   if (secondSinceLastRender < 1 / SNAKE_SPEED) {
      return;
   }
   lastRenderTime = currentTime;
   update();
   draw();
}
window.requestAnimationFrame(main);

function update() {
   updateSnake();
}
function draw() {
   // removes the trailing snake blocks
   gameBoard.innerHTML = "";
   drawSnake(gameBoard);
}
