function addMovementListeners() {
   up.addEventListener("click", upMovement);
   down.addEventListener("click", downMovement);
   left.addEventListener("click", leftMovement);
   right.addEventListener("click", rightMovement);
}

function upMovement(event) {
   down.removeEventListener("click", downMovement);
   left.removeEventListener("click", leftMovement);
   right.removeEventListener("click", rightMovement);
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
   addMovementListeners();
}
function downMovement(event) {
   up.removeEventListener("click", upMovement);
   left.removeEventListener("click", leftMovement);
   right.removeEventListener("click", rightMovement);
   for (let i = yAxis; i < 8; i++) {
      setTimeout(() => {
         blockArray[computingMatrix[i][xAxis]].classList.add("snake");
         if (i > 0) {
            blockArray[computingMatrix[i - 1][xAxis]].classList.remove("snake");
         }
      }, 400 * i);
      yAxis = i;
   }
   addMovementListeners();
}

function leftMovement() {
   down.removeEventListener("click", downMovement);
   up.removeEventListener("click", upMovement);
   right.removeEventListener("click", rightMovement);
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
   addMovementListeners();
}
function rightMovement() {
   down.removeEventListener("click", downMovement);
   left.removeEventListener("click", leftMovement);
   up.removeEventListener("click", upMovement);
   for (let i = xAxis; i < 8; i++) {
      setTimeout(() => {
         blockArray[computingMatrix[yAxis][i]].classList.add("snake");
         if (i > 0) {
            blockArray[computingMatrix[yAxis][i - 1]].classList.remove("snake");
         }
      }, 400 * i);
      xAxis = i;
   }
   addMovementListeners();
}
