
// Prevoius Practice

let heading = document.getElementById("bigHead"); //Accessing the elements
let getHead = heading.getAttribute("id");
console.log(getHead);

let addHead = heading.setAttribute("id", "FirstHeading") //Accessing the elements
console.log(addHead);

// Inserting Elements
// 1) Create  document.createElements("div");
// 2) Add append(end), prepend(start), 

// Lets create Element (button) 
let btn = document.createElement("button");
btn.innerText = "Upload";


// Add the button Element (button)
let div = document.querySelector("div"); //First access the target node
// inside the div 
// div.append(btn);
div.prepend(btn);


// Node.before
// Node.after



// Before
//create
let para = document.createElement("p");
para.textContent = "Hi there i am a software developer and make software with coding";

// add
let box = document.querySelector("#secondDiv");
box.before(para);


// After 
// Create
let largeH = document.createElement("h1");
largeH.textContent = "Hello Js from Saqib Arain"

// Add
let bigHead = document.querySelector("#secondDiv");
bigHead.after(largeH);



