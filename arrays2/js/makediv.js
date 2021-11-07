let dvFound = document.getElementById("dvFound");

let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   function makeDiv() {
      // a loop to create divs for each object
   for(let i = 0; i < objects.length; i++) {
    // create a variable for the new divs
    let newEl = document.createElement("div");
    // inplement the object sections to new variables
    let colorDv = objects[i].color;
    let heightDv = objects[i].height + "px";
    let widthDv = objects[i].width + "px";
    // style the divs accordingly just using the variables
    newEl.style.height = heightDv;
    newEl.style.width = widthDv;
    newEl.style.backgroundColor = colorDv;
    // appending the element
    dvFound.appendChild(newEl);
       
   } 
   }
