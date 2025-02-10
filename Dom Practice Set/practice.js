let btn = document.createElement("button");
btn.textContent = "Click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let impl = document.querySelector("body");
impl.prepend(btn);


// 2nd Question

let content = document.querySelector("p");
let get = content.getAttribute("class");
let set = content.setAttribute("class", "newpara");