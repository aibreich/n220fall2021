// im using the same coin div from the lectures
let dvCoin = document.getElementById("coin");
// inner html words
dvCoin.innerHTML = "MouseOut";
// starting div color
dvCoin.style.backgroundColor = "#00FFFF";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function colBlack() {
    // the color the div changes to when on top of
    dvCoin.style.backgroundColor = "#000"
}
function colBlue() {
    // the same type of function just playing in reverse to get the blue back on
    dvCoin.style.backgroundColor = "#00FFFF"
}