sayHello("Aiden");

function sayHello(name) {
    console.log(`hello ${name}!`);
}

let playerOne = sayHellomultiple("Aiden", 20);
let playerTwo = sayHellomultiple("yeah", 30);
let p1div = document.getElementById("pOdiv");
let p2div = document.getElementById("pTdiv");

p1div.innerHTML = `Player one: ${playerOne}`;
p2div.innerHTML = `Player two: ${playerTwo}`;

function sayHellomultiple(name, timesToSay) {
    let workingName = name;
    let lastLetter = name[name.length -1]
    for(let i = 0; i < timesToSay; i++) {
        
        workingName += lastLetter;
    }
    
    return workingName;
};