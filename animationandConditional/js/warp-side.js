let xPos = 0;
let xSpeed = 5;


function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(0);
    fill(245, 66, 66)
    xPos = xPos + xSpeed;
    if(xPos >= 800) {
     xPos = xPos - 800;
    }
    
    circle(xPos, 50, 45)
    
    
}