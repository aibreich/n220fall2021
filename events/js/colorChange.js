// grabbing the 3 divs
let sumDv = document.getElementsByClassName("sumDv");

// adding the click handler with event listeners
for (i = 0; i < sumDv.length; i++) {
  sumDv[i].addEventListener("click", changeColor);
  sumDv[i].style.width = "200px";
  sumDv[i].style.height = "200px";
  sumDv[i].style.float = "left";
  sumDv[i].style.margin = "5px";
  sumDv[i].style.backgroundColor = "#888";
}

// styling each box to get the styling right

// the change color functions that read the data response

function changeColor(event) {
  // grabbing the data response from each event

  let response = event.target.getAttribute("data-response");

  console.log(response);
  //   changing the target div based on the data response
  event.target.style.backgroundColor = response;
}
