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

for (let i = 0; i < 8; i++) {
   for (let j = 0; j < 8; j++) {
      setTimeout(() => {
         blockArray[computingMatrix[i][j]].classList.add("snake");
      }, 1000 * computingMatrix[i][j]);
      setTimeout(() => {
         if (j - 1 >= 0 && blockArray[computingMatrix[i][j - 1]].classList.contains("snake")) {
            blockArray[computingMatrix[i][j - 1]].classList.remove("snake");
         }
      }, 1000 * computingMatrix[i][j]);
   }
   setTimeout(() => {
      if (blockArray[computingMatrix[i][7]].classList.contains("snake")) {
         blockArray[computingMatrix[i][7]].classList.remove("snake");
      }
   }, 1300 * computingMatrix[i][7 - i]);
}
