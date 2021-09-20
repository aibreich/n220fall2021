// these are the empty arrays that allow the brick to move down and place around the screen
let moveX = []; 
let moveY = []; 
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);
  noStroke();
  fill(255, 245, 200);
  // for loop that runs technically forever somewhat
  for (let i = 0; i < moveY.length; i++) {
    rect(moveX[i], moveY[i], 50, 25);
    // making the fall speed 5 pixels
    moveY[i] += 5;
  }
  
  
}
// mouse pressed function to make the rect have a spot to be
function mousePressed() {
  moveX.push(mouseX);
  moveY.push(mouseY);
  
}

