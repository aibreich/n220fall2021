// making the tails for the snake
let xtrail = [ 0,0,0,0,0,0,0,0,0,0,0,0,];
let ytrail = [ 0,0,0,0,0,0,0,0,0,];

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(111)
// having the trails follow and end behind the mouse
    xtrail.push(mouseX);
    ytrail.push(mouseY);
    xtrail.shift();
    ytrail.shift();
    // for loop to make the tails work
    for( var i = 0; i < xtrail.length; i++) {
        for( var k = 0; k < ytrail.length; k++) {
            fill(0);
            circle(xtrail[i], ytrail[k], 30)
        }
    }
}