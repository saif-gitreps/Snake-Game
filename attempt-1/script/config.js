function addMovementListeners() {
   up.addEventListener("click", upMovement);
   down.addEventListener("click", downMovement);
   left.addEventListener("click", leftMovement);
   right.addEventListener("click", rightMovement);
}

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
      if (i == 4) {
         break;
      }
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
   for (let i = xAxis; i < 8; i++) {
      setTimeout(() => {
         blockArray[computingMatrix[yAxis][i]].classList.add("snake");
         if (i > 0) {
            blockArray[computingMatrix[yAxis][i - 1]].classList.remove("snake");
         }
      }, 400 * i);
      xAxis = i;
   }
}
