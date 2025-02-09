let heading = document.querySelector("h2");
let updated_heading = heading.innerText  =  heading.innerText + " from Apna college Students";
console.log(updated_heading);


let divs = document.querySelectorAll(".box");
let names = ["onebox", "twobox", "threebox"];

for (let i = 0; i<divs.length; i++){
    divs[i].innerText = names[i];
}

// let onediv = unique[0].innerText = "I am not that first div"; 
// let seconddiv = unique[1].innerText = "I am not that second div";
// let thirddiv = unique[2].innerText = "I am not that third div";


let anchor = document.querySelector("#form");
console.dir(anchor);
console.log(anchor.innerText);
let bs = anchor.innerText + " World";
console.log(bs);


// getAttribute and add setAttribut
let btn = document.getElementById("submitBtn");
console.log(btn);
let setValue = btn.getAttribute("id");
console.log(setValue);

let changeValue = btn.setAttribute("id", "bigBtn");
console.log(changeValue);



