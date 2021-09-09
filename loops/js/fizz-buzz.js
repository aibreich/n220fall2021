function setup() {
    createCanvas(650, 200);
    // making background grey
    background(100);
    // using a for loop to create 25 circles
    for(var k = 1; k < 26; k++) {
        // fill to make them black
        fill(0)
        // if statements to get when k is divisble by 3, 5 and then lastly by 3 and 5 
        if(k % 3 == 0){
            fill(170, 66, 245)
        }
        if(k % 5 == 0){
            fill(66, 245, 117)
        }
        if(k % 15 == 0){
            fill(66, 132, 245)
        }
        // circle
        circle(k * 25, 100, 20)
        
    }
    
}