let doggyDiv = document.getElementById("doggyDiv");



let dog = [
    {type: "doodle", color: "gold", age: "3"},
    {type: "boxer", color: "brown", age: "8"},
    {type: "beagle", color: "spotted", age: "6"}
];

for(let i = 0; i < dog.length; i++) {
    let newEl = document.createElement("div");
    newEl.innerHTML = dog[i].type + ": " + dog[i].color + ": " + dog[i].age;
    
    newEl.classList.add("doge")
    doggyDiv.appendChild(newEl)
    if(dog[i].type == "boxer") {
        newEl.style.backgroundColor = "#C89D7C";
    } 
}


