// grab each element for the divs
let styleDiv = document.getElementById("style");
let style2Div = document.getElementById("style2");
let style3Div = document.getElementById("style3");
// give them all their base width and height with color
styleDiv.style.width = "50px";
styleDiv.style.height = "50px";
styleDiv.style.backgroundColor = "#f00";
styleDiv.style.margin ="10px"
style2Div.style.width = "50px";
style2Div.style.height = "50px";
style2Div.style.backgroundColor = "#f00";
style2Div.style.margin ="10px"
style3Div.style.width = "50px";
style3Div.style.height = "50px";
style3Div.style.backgroundColor = "#f00";
style3Div.style.margin ="10px"

// the change style function for the divs i repeated it for each div
function changeStyle() {
    // this changes the width, height, and color when the div is clicked on
    styleDiv.style.width = "30px";
    styleDiv.style.height = "60px";
    styleDiv.style.backgroundColor = "#00f";
}

function changeStyle2() {
    style2Div.style.width = "30px";
    style2Div.style.height = "60px";
    style2Div.style.backgroundColor = "#00f";
}
function changeStyle3() {
    style3Div.style.width = "30px";
    style3Div.style.height = "60px";
    style3Div.style.backgroundColor = "#00f";
}

// these are the functions for the divs to change back i also repeated them for each respective div
function changeBack() {
    styleDiv.style.width = "50px";
    styleDiv.style.height = "50px";
    styleDiv.style.backgroundColor = "#f00";
}
function changeBack2() {
    style2Div.style.width = "50px";
    style2Div.style.height = "50px";
    style2Div.style.backgroundColor = "#f00";
}
function changeBack3() {
    style3Div.style.width = "50px";
    style3Div.style.height = "50px";
    style3Div.style.backgroundColor = "#f00";
}