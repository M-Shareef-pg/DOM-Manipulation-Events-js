// Selcting with id
let headings = document.getElementById("Hello");
console.dir(headings);
console.log(headings);

// Selecting with class
let classP = document.getElementsByClassName("para-class");
console.dir(classP);
console.log(classP);

// Selecting with tag
let btn = document.getElementsByTagName("button");
console.dir(btn);
console.log(btn);
console.log(btn.tagName);

// Selecting by Query Selector (will pick first element)
let query = document.querySelector("div");
console.dir(query);
console.log(query);

// Selecting by Query Selector all (will pick all elements)
let allquery = document.querySelectorAll("div");
console.dir(allquery);
console.log(allquery);

// properties
// tagName
let Sp = document.querySelector("span");
console.dir(Sp);
console.log(Sp);
console.log(Sp.tagName);
// innerText
console.log(Sp.innerText);

let collection = document.querySelector("#parent-div")
let access = document.querySelector("#parent-div").firstChild;
console.log(access);
console.dir(collection);    
console.log(collection.tagName);
console.log(collection.innerText);



let cNode = document.querySelector("#commentnode").firstChild;
console.log(cNode);

