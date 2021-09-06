let counter = 0;
let xPos = 0;
function setup() {
    background(0)
    createCanvas(800, 400);
}
function draw() {
    background(0)
    xPos = xPos + 1;
    counter = counter + 1;
    console.log(xPos + counter);
    fill(66, 120, 245)
    circle(xPos, 50, 45)
}

