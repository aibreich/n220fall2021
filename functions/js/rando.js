// grab the element by id
let randoNum = document.getElementById("randoNum");


// here im setting up a function to have two different inputs to take
function doRando(min, max) {
    // using a return where i am generating the random number
    return Math.floor(Math.random() * (max - min)) + min
}
// my onclick function called do thing
function doThing() {
    // the inner html styling for the div with it having the min and max value of the function above
    randoNum.innerHTML = `${doRando(0, 11)}`;
    
}

