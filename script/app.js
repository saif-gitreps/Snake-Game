let computingMatrix = [
   [0, 1, 2, 3, 4, 5, 6, 7],
   [8, 9, 10, 11, 12, 13, 14, 15],
   [16, 17, 18, 19, 20, 21, 22, 23],
   [24, 25, 26, 27, 28, 29, 30, 31],
   [32, 33, 34, 35, 36, 37, 38, 39],
   [40, 41, 42, 43, 44, 45, 46, 47],
   [48, 49, 50, 51, 52, 53, 54, 55],
   [56, 57, 58, 59, 60, 61, 62, 63],
];

const blockArray = document.querySelectorAll("#game-board li");
const output = document.getElementById("output");
const up = document.getElementById("up-button");
const left = document.getElementById("left-button");
const right = document.getElementById("right-button");
const down = document.getElementById("down-button");
const reset = document.getElementById("reset-button");

let xAxis = 0;
let yAxis = 0;

up.addEventListener("click", upMovement);
down.addEventListener("click", downMovement);
left.addEventListener("click", leftMovement);
right.addEventListener("click", rightMovement);

reset.addEventListener("click", (event) => {
   xAxis = 0;
   yAxis = 0;
   for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
         if (blockArray[computingMatrix[i][j]].classList.contains("snake")) {
            blockArray[computingMatrix[i][j]].classList.remove("snake");
         }
      }
   }
});
