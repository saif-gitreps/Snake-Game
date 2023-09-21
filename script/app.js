const blockMatrix = document.getElementById("game-board");
const output = document.getElementById("output");

let currentIteration = 0;
function doSomething() {
   for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
         output.textContent = i;
      }, 1000 * i);
   }
}

doSomething();
