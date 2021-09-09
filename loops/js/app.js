// while loop
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }
// console.log("Afterwards: " + i);

// for loop

// for(var k = 0; k < 5; k++) {
//     console.log(k);
// }
// console.log("Afterwards: " + k);

// setting the canvas up
function setup() {
    createCanvas(500, 500);
    // making background grey
    background(100);
    // using a for loop to create rings of circles
    for(var k = 1; k < 51; k++) {
        // no fill so you can see the individual circles
        noFill()
        // circle
        circle(250, 250, k * 10)
    }
}




