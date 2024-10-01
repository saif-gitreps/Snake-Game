export let inputDirection = { x: 0, y: 0 };
export let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (event) => {
   switch (event.key) {
      case "ArrowUp":
         if (lastInputDirection.y !== 0) {
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
      case "w":
         if (lastInputDirection.y !== 0) {
            break;
         }
         inputDirection = { x: 0, y: -1 };
         break;
      case "s":
         if (lastInputDirection.y !== 0) {
            break;
         }
         inputDirection = { x: 0, y: 1 };
         break;
      case "a":
         if (lastInputDirection.x !== 0) {
            break;
         }
         inputDirection = { x: -1, y: 0 };
         break;
      case "d":
         if (lastInputDirection.x !== 0) {
            break;
         }
         inputDirection = { x: 1, y: 0 };
         break;
      case "W":
         if (lastInputDirection.y !== 0) {
            break;
         }
         inputDirection = { x: 0, y: -1 };
         break;
      case "S":
         if (lastInputDirection.y !== 0) {
            break;
         }
         inputDirection = { x: 0, y: 1 };
         break;
      case "A":
         if (lastInputDirection.x !== 0) {
            break;
         }
         inputDirection = { x: -1, y: 0 };
         break;
      case "D":
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
