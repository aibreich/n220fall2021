class Particle {

    x = 400;
    y = 200;
    velocity = { x: 2 - Math.random() * 8.5, y: -2};
    gravity = .07;
    color = [100, 50, Math.random() * 255]
    

    update() {
        noStroke();
        fill(this.color)
        circle(this.x, this.y, 10)
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.gravity;

        if( this.y >= 400) {
            this.velocity.y *= -1;
        }
    }
}

let particles = [];

function setup() {
    createCanvas(600, 400)

    for(var i = 0; i < 123; i++) {
        particles[i] = new Particle()
    }
}
function draw() {
    for(var i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}