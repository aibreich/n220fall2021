// im using the same coin div from the lectures
let dvCoin = document.getElementById("coin");
// inner html for the div
dvCoin.innerHTML = "GET AWAY";
// the div color
dvCoin.style.backgroundColor = "#00FFFF";
// the starting height and width of the div
dvCoin.style.width = "50px";
dvCoin.style.height = "50px";



// my hover function which increases the height and width of the square
function hoverOn() {
    // using the peak pixels increase height and width that i used just with a different rate of increase
    var width = dvCoin.offsetWidth;
    var height = dvCoin.offsetHeight;
    var newHeight = height + 50;
    var newWidth = width + 50;
    dvCoin.style.height = newHeight + 'px';
    dvCoin.style.width = newWidth + 'px';
    // i was unable to get these if statements to work to limit it from becoming huge
    if (newWidth == 300) {
        newWidth = 50
    }
    if (newHeight == 300) {
        newHeight = 50
    }



}
// rotate variable
let rotation = 0;
// rotate function
    function rotateDiv() {
        // giving it a degree of 45
      rotation += 45;
    //   giving it the ability to reset
      if (rotation === 360) { 
        
        rotation = 0;
      }
    //   using the styling transform tag with rotate then the var which starts at 45 and increasing
      dvCoin.style.transform = `rotate(${rotation}deg)`;
    }
