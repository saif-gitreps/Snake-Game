import {
   update as updateSnake,
   draw as drawSnake,
   getSnakeHead,
   snakeIntersection,
   SNAKE_SPEED,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

import { outSideGrid } from "./grid.js";

const gameBoard = document.getElementById("game-board");
const gameOverText = document.getElementById("game-over-text");

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
   if (gameOver) {
      gameOverText.innerText = "Game Over";
      return;
   }

   window.requestAnimationFrame(main);

   const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;

   if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

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
