import { getInputDirection, inputDirection } from "./input..js";

export const SNAKE_SPEED = 1;
const snakeBody = [{ x: 10, y: 11 }];
export function update() {
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
