let computingMatrix = [
   [0, 1, 2, 3],
   [4, 5, 6, 7],
   [8, 9, 10, 11],
   [12, 13, 14, 15],
];

const blockArray = document.querySelectorAll("#game-board li");
const output = document.getElementById("output");

for (let i = 0; i < 4; i++) {
   for (let j = 0; j < 4; j++) {
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
      if (blockArray[computingMatrix[i][3]].classList.contains("snake")) {
         blockArray[computingMatrix[i][3]].classList.remove("snake");
      }
   }, 1300 * computingMatrix[i][3 - i]);
}
