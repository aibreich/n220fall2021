let txtBox = document.getElementById("txtBox");
let dvBad = document.getElementById("dvBad");
let dvCount = document.getElementById("dvCount");

// create check function
function badCheck() {
    // grab the value of input
    let sentance = txtBox.value;
    // split it on the spaces
    let splitSentance = sentance.split(" ")
    // create for loop for the checker
    for(let i = 0; i < splitSentance.length; i++){
        // create an if statement with the bad words
        if (splitSentance[i] == "water", "clear", "tires") {
            // if they are found show it
            dvBad.innerHTML = "Found";
            // show how many there were
            dvCount.innerHTML = i;
        }
    }
    console.log(splitSentance)

}