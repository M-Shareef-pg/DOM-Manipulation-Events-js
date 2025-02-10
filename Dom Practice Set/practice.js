let btn = document.createElement("button");
btn.textContent = "Click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let impl = document.querySelector("body");
impl.prepend(btn);