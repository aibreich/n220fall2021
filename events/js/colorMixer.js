// grabbing the elements

let mainBox = document.getElementById("mainBox");
let numBox = document.getElementById("numBox");
let numDv = document.getElementsByClassName("numDv");
// setting a red green blue color
let rColor = 0;
let gColor = 0;
let bColor = 0;
// styling the number box that will hold the current color
numBox.style.width = "300px";
numBox.style.height = "20px";
numBox.style.position = "absolute";
numBox.style.top = "240px";
numBox.style.left = "10px";
numBox.style.border = "#999 3px solid";
numBox.style.borderRadius = "9px";
numBox.style.textAlign = "center";

numBox.innerHTML =
  "Current Color = rgb( " + rColor + ", " + gColor + ", " + bColor + ")";

//   the main box that changes with the inputs
mainBox.style.width = "300px";
mainBox.style.height = "200px";
mainBox.style.float = "left";
mainBox.style.margin = "5px";
mainBox.style.backgroundColor =
  "rgb(" + rColor + "," + gColor + "," + bColor + ")";

//   a for loop to add the event listeners also some styling is done
for (i = 0; i < numDv.length; i++) {
  numDv[i].addEventListener("click", colorPlus);
  numDv[i].style.width = "50px";
  numDv[i].style.height = "50px";
  numDv[i].style.margin = "5px";
  numDv[i].style.backgroundColor = "#666";
  numDv[i].style.textAlign = "center";
}

function colorPlus(event) {
  // response to get the amount they add
  let response = event.target.getAttribute("data-response");
  //   color to show what color it is
  let whtColor = event.target.getAttribute("data-color");
  //   if statements that add the numbers on top of each other dependant on what color they are
  if (whtColor == "red") {
    rColor = rColor + Number(response);
    console.log(rColor);
  }
  if (whtColor == "green") {
    gColor = gColor + Number(response);
    console.log(gColor);
  }
  if (whtColor == "blue") {
    bColor = bColor + Number(response);
    console.log(bColor);
  }
  // updating the numBox
  numBox.innerHTML =
    "Current Color = rgb( " + rColor + ", " + gColor + ", " + bColor + ")";
  // updating the main color for the box
  mainBox.style.backgroundColor =
    "rgb(" + rColor + "," + gColor + "," + bColor + ")";
}
