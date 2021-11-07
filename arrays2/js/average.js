let txtBox = document.getElementById("txtBox");
let dvAve = document.getElementById("dvAve");
let dvSum = document.getElementById("dvSum");
// the calc function
function calcSum() {
    // grab the input
    let stringNum = txtBox.value;
    // split the input on commas
    let splitNum = stringNum.split(",")
    // put split input into the array
    let myArray =  splitNum ;
    // reduce array
    let sum = 0;
    // for loop to add the sum
    for(let i = 0; i < myArray.length; i++) {
        // let the array add up with the sum
       sum += Number(myArray[i]);
       
    }
    // get a variable that divides sum by the length of the array
    let avgNum = sum / myArray.length;
    // input the calculation to the divs
    dvSum.innerHTML = sum;
    dvAve.innerHTML = avgNum;
    // clear the input once button is clicked
    txtBox.value = "";
}