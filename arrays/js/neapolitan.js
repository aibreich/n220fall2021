// an array for the colors
let colores = [ "#FDAEAE", "#Ffc0cb", "#F6E2B3", "#B49982", "#7E6651"]
 
let k = 0;
var xSpeed = 20;

function setup() {
    createCanvas(800, 250);
    background(111);
}

function draw() {
    // for loop running for as many colors there are
    for(var i = 0; i < colores.length; i++) {
        fill(colores[i])
        square((150 * i + 20), 50, 150)
        
    }
}