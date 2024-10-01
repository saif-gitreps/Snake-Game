export let inputDirection = { x: 0, y: 0 };
export let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (event) => {
   switch (event.key) {
      case "ArrowUp":
         if (lastInputDirection.y !== 0) {
            // this if means that , by default inputdirection.x or y is 0 , if it is anything other than 0 that means it is moving in one straight direction and we are not allowed to go left or right.
            // Bascially this prevents 180 rotations.
            break;
         }
         inputDirection = { x: 0, y: -1 };
         break;
      case "ArrowDown":
         if (lastInputDirection.y !== 0) {
            break;
         }
         inputDirection = { x: 0, y: 1 };
         break;
      case "ArrowLeft":
         if (lastInputDirection.x !== 0) {
            break;
         }
         inputDirection = { x: -1, y: 0 };
         break;
      case "ArrowRight":
         if (lastInputDirection.x !== 0) {
            break;
         }
         inputDirection = { x: 1, y: 0 };
         break;
   }
});

export function getInputDirection() {
   // this is done to cancel out opposite direction or disallowed movement of the opposit direction.
   lastInputDirection = inputDirection;
   return inputDirection;
}
