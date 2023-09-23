import { getInputDirection, inputDirection } from "./input..js";

export function update() {}

export function draw(gameBoard) {
   snakeBody.forEach((item) => {
      const snakeElement = document.createElement("div");
      snakeElement.style.gridRowStart = item.y;
      snakeElement.style.gridColumnStart = item.x;
      snakeElement.classList.add("snake");
      gameBoard.appendChild(snakeElement);
   });
}
