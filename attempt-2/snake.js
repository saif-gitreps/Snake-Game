import { getInputDirection, inputDirection } from "./input..js";

export const SNAKE_SPEED = 6;
const snakeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

export function update() {
   addSegments();
   const inputDirection = getInputDirection();
   for (let i = snakeBody.length - 2; i >= 0; i--) {
      // this says to take the bottom of block to go one block above.
      // bascially 1-2->3  will be 2->3->4
      snakeBody[i + 1] = { ...snakeBody[i] };
   }
   //updating the head.
   snakeBody[0].x += inputDirection.x;
   snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
   snakeBody.forEach((item) => {
      const snakeElement = document.createElement("div");
      snakeElement.style.gridRowStart = item.y;
      snakeElement.style.gridColumnStart = item.x;
      snakeElement.classList.add("snake");
      gameBoard.appendChild(snakeElement);
   });
}

export function expandSnake(amount) {
   newSegments += amount;
}

export function onSnake(position) {
   return snakeBody.some((segment) => {
      return equalPosition(segment, position);
   });
}

export function getSnakeHead() {
   return snakeBody[0];
}

export function snakeIntersection() {}

function equalPosition(pos1, pos2) {
   return pos1.x == pos2.x && pos1.y == pos2.y;
}

function addSegments() {
   for (let i = 0; i < newSegments; i++) {
      // duplicating at the end of our snake.
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
   }
   // PREVENT DUPLICATION OF SNAKE
   newSegments = 0;
}
