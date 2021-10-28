// grab the elements from the index
let numbIn = document.getElementById("numbIn");
let ansDiv = document.getElementById("ansDiv");

// set a function for the division
function doDivision() {
    // set a local variable for the value of the input
    let sumNumb = numbIn.value;
    // log it to make sure its working
    console.log(sumNumb)
    // set a new variable to have the function and the value input to calculate the divisibility
    let calcT = myCalc(sumNumb);
    // log out to see if it is working 
    console.log(calcT)
    // input the math to the div with innerHTML
    ansDiv.innerHTML = calcT;
}
// the calculation function
function myCalc(numbIn) {
    // the problem to divide the input by seven
    calc = numbIn / 7;
    
// the if statement for if it is divisible by seven or not
    if(numbIn % 7 == 0) {
        // this is true input this to div
        answer = calc + " true";
    }else {
        // if not input false to the div
        answer = calc + " false";
    }

    // return the answer for the div to use
    return answer;
}