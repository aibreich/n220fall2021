let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);
element.innerHTML = "i've been clicked";
element.style.backgroundColor = "#999";
// all events have a target targets are in general is the item that was listening for the event
// function itsClicked(event) {
//   console.log(event.target);
// }

function itsClicked(event) {
  event.target.style.backgroundColor = "#999";
  console.log(event.target);
  console.log(element);

  // get the attribute
  let response = element.getAttribute("data-response");
  //   console.log(response);
  event.target.innerHTML = response;
}

let gameBody = document.getElementById("gameBody");
// make 4 'enemeies
for (var i = 0; i < 4; i++) {
  let newEn = document.createElement("div");
  newEn.style.width = "30px";
  newEn.style.height = "30px";
  newEn.style.position = "absolute";
  newEn.style.top = Math.random() * 100 + "px";
  newEn.style.left = Math.random() * 100 + "px";
  newEn.style.borderRadius = "15px";
  newEn.style.backgroundColor = "#222";

  gameBody.appendChild(newEn);

  newEn.addEventListener("click", removeEnemy);
}

function removeEnemy(event) {
  //   event.target.style.backgroundColor = "#FF0000";
  event.target.remove();
}
