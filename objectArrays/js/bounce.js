
class bounce {

    x = Math.random() * 600;
    y = Math.random() * 400;
    velocity = { x: 1 - Math.random() * 1.5, y: -2};
    gravity = .07;
    color = [125, Math.random() * 105, 150]
    

    update() {
        noStroke();
        fill(this.color)
        circle(this.x, this.y, 20)
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.gravity;

        if( this.y >= 400) {
            this.velocity.y *= -.9;
        }
    }
}

let bounces = [];

function setup() {
    createCanvas(600, 400)

    for(var i = 0; i < 5; i++) {
        bounces[i] = new bounce()
    }
}
function draw() {
    for(var i = 0; i < bounces.length; i++) {
        bounces[i].update();
    }
}