// im using the same coin div from the lectures
let dvCoin = document.getElementById("coin");
// inner html text
dvCoin.innerHTML = "PEAK PIXELS";
dvCoin.style.color = "#fff";
// background color of the div
dvCoin.style.backgroundColor = "#322448";
// height and width styling
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function incSize() {
    // two variables set to dvCoin.offset to get the width and height of the coin
    var width = dvCoin.offsetWidth;
    var height = dvCoin.offsetHeight;
    // two more variables that will work to add onto the width and height
    var newHeight = height + 10;
    var newWidth = width + 10;
    // setting the two newwidth and newheight to add px to keep them in pixels and to implement them into the styling
    dvCoin.style.height = newHeight + 'px';
    dvCoin.style.width = newWidth + 'px';
    
   
}


