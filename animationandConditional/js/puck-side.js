// puck side

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    fill(0)
    if(mouseX <= 200) {
    fill(245, 66, 66)
    }
    if(mouseX >= 200) {
    fill(66, 120, 245)
    }
    circle(mouseX, mouseY, 30)
    
    
}