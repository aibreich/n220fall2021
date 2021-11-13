// grabbing the 3 divs
let flshCrd = document.getElementsByClassName("flshCrd");

// adding the click handler with event listeners
// and styling the cards
for (i = 0; i < flshCrd.length; i++) {
  flshCrd[i].addEventListener("click", changeColor);
  flshCrd[i].style.width = "200px";
  flshCrd[i].style.height = "40px";
  flshCrd[i].style.float = "left";
  flshCrd[i].style.margin = "5px";
  flshCrd[i].style.backgroundColor = "#888";
  flshCrd[i].style.textAlign = "center";
}

function changeColor(event) {
  // grabbing the data response from each event
  let response = event.target.getAttribute("data-response");
  // getting the attribute
  console.log(response);
  //   switching the answer in
  event.target.innerHTML = response;
}
