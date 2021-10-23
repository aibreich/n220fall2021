let numb = document.getElementById("numb");
let dvOutput = document.getElementById("dvOutput");

function doGuess() {
    // getting the number from the input value
    let sumNumb = Number(numb.value);
    // making the number have a easier way to code 
     let guess = sumNumb;
    //  the if statements for too high too low and correct
    if(guess == 16) {
        dvOutput.innerHTML = "Correct!";
    }
    if(guess <= 16) {
        dvOutput.innerHTML = "Too low!";
    }
    if(guess >= 16) {
        dvOutput.innerHTML = "Too High!";
    }
}


