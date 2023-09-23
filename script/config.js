// for (let i = 0; i < 8; i++) {
//    for (let j = 0; j < 8; j++) {
//       setTimeout(() => {
//          blockArray[computingMatrix[i][j]].classList.add("snake");
//       }, 500 * computingMatrix[i][j]);
//       setTimeout(() => {
//          if (j - 1 >= 0 && blockArray[computingMatrix[i][j - 1]].classList.contains("snake")) {
//             blockArray[computingMatrix[i][j - 1]].classList.remove("snake");
//          }
//       }, 500 * computingMatrix[i][j]);
//    }
//    setTimeout(() => {
//       if (blockArray[computingMatrix[i][7]].classList.contains("snake")) {
//          blockArray[computingMatrix[i][7]].classList.remove("snake");
//       }
//    }, 700 * computingMatrix[0][0]);
// }

function upMovement(event) {
   let pointer = yAxis;
   for (let i = yAxis; i >= 0; i--) {
      setTimeout(() => {
         blockArray[computingMatrix[i][xAxis]].classList.add("snake");
         if (i < 7) {
            blockArray[computingMatrix[i + 1][xAxis]].classList.remove("snake");
         }
      }, 400 * (pointer - i));
      yAxis = i;
   }
}
function downMovement(event) {
   for (let i = yAxis; i < 8; i++) {
      setTimeout(() => {
         blockArray[computingMatrix[i][xAxis]].classList.add("snake");
         if (i > 0) {
            blockArray[computingMatrix[i - 1][xAxis]].classList.remove("snake");
         }
      }, 400 * i);
      yAxis = i;
   }
}

function leftMovement() {
   let pointer = xAxis;
   for (let i = xAxis; i >= 0; i--) {
      setTimeout(() => {
         blockArray[computingMatrix[yAxis][i]].classList.add("snake");
         if (i < 7) {
            blockArray[computingMatrix[yAxis][i + 1]].classList.remove("snake");
         }
      }, 400 * (pointer - i));
      xAxis = i;
      console.log(xAxis);
   }
}
function rightMovement() {
   for (let i = 0; i < 8; i++) {
      setTimeout(() => {
         blockArray[computingMatrix[yAxis][i]].classList.add("snake");
         if (i > 0) {
            blockArray[computingMatrix[yAxis][i - 1]].classList.remove("snake");
         }
      }, 400 * i);
      xAxis = i;
   }
}
