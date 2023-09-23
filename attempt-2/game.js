import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

const gameBoard = document.getElementById("game-board");

let lastRenderTime = 0;
// we are making an event loop here.
let gameOver = false;

function main(currentTime) {
   if (gameOver) {
      return alert("you loose");
   }

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
   updateFood();
   checkDeath();
}
function draw() {
   // removes the trailing snake blocks
   gameBoard.innerHTML = "";
   drawSnake(gameBoard);
   drawFood(gameBoard);
}

function checkDeath() {
   gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
