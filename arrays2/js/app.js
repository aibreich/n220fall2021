let statement = "May the force be with you.";
// split on the spaces
let splitStatement = statement.split(" ");
// ["May", "the", "force", "be", "with", "you."];
let txtExample = document.getElementById("txtExample");
let dvFound = document.getElementById("dvFound");
function breakString() {
    let sentance = txtExample.value;

    console.log(sentance)
    // splitting on spaces vvv
    let splitSentance = sentance.split(" ")
    console.log(splitSentance[1]);
    console.log(splitSentance);
}

let socialNetworks = [ "Twitter", "Facebook", "Instagram", "Myspace"];
let fakeSocial = [
    { name: "Max", update: "Today is 2 cool"},
    { name: "Sarah", update: "Getting Crepes today"},
    { name: "Aaron", update: "Stressed about class :|"},
    { name: "Max", update: "oh no i lied"}
];
function findInsta() {
    
    // var element = socialNetworks.find( function(item) {
    //     return item == "Instagram";
    // })
    // console.log(element);
    console.log( fakeSocial[2].update)
    for(var i = 0; i < fakeSocial.length; i++) {
        let newEl = document.createElement("div");
        newEl.innerHTML = fakeSocial[i].name + ": " + fakeSocial[i].update;

        dvFound.appendChild(newEl);
    }
}

function calcScores() {
    let myArray = [ 2, 4, 6, 8, 10 ];
    // reduce array
    let sum = 0;
    
    for(let i = 0; i < myArray.length; i++) {
       sum += myArray[i];
    }
    console.log(sum);
}


