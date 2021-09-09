    // var c is used to create the slant in the order of boxes
    var c = 4;

    function setup() {
    createCanvas(500, 500);
    // making background grey
    background(100);
    // using a for loop for y value
    for(var y = 1; y <= c; y++) {
        // for loop for x value
        fill(252, 3, 3);
        for(var x = 1; x <= y; x++) {
            rect(x * 28, y * 28, 25, 25)
            
        }
    }
}