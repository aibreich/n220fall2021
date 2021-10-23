// grabbing the element
let tipsBox = document.getElementById("tipsBox");


// function called to push the input into the tip calculator
function doCalc() {
    // defining a variable to go with the id 
    let tips = Number(tipsBox.value)
    // multiplying the tip by .2 to get the tip amount
    let theTip = tips * 0.2;
    // adding the tip onto the previous total to get new total
    let theTotal = theTip + tips;
    // logging it to the console
    console.log("Tip:$", theTip, "Total:$", theTotal);
    // To clear out input tag after button is clicked
    tipsBox.value = "";
    
}
