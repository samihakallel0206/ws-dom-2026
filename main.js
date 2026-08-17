//test
// alert("Bonjour")
//declaration
// console.log(document.getElementsByTagName("div"))
const title2 = document.getElementsByClassName("title2");
// console.log(title2)
const image = document.getElementById("image_nature");
// console.log(image)
//le premier parag
const paragraphe = document.querySelector("p");
// console.log(paragraphe);

const paragraphe2 = document.querySelector(".parag");
const imageQuery = document.querySelector("#image_nature");
// console.log(imageQuery)
//tous les p
const parags = document.querySelectorAll("p");
// console.log(parags)

const paragraphes = document.querySelectorAll(".parag");
// console.log(paragraphes)

const unordlist = document.querySelector("ul");

const task = document.getElementById("task");
// console.log(task)
const btnMasquer = document.getElementById("btnMasquer")
//modification
paragraphe2.textContent = "Hello we test, bonjoue c'est juste un test";

paragraphe2.style.color = "red";
paragraphe2.style.backgroundColor = "black";
// console.log(title2[1])
title2[1].innerHTML = "Bonjour!!";
// console.log(document.querySelector("div").innerHTML)

image.setAttribute(
  "src",
  "https://plus.unsplash.com/premium_photo-1786896621968-b4a9f3772d9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
);
image.style.width = "250px";
image.alt = "visage";

image.classList.add("imagetest");

task.addEventListener("click", function () {
  const li = document.createElement("li");
//   console.log(li)
  unordlist.appendChild(li);
  var taskInput =document.getElementById("taskInput")
  li.textContent = taskInput.value;
  taskInput.value =""
});

btnMasquer.addEventListener("click", function(){
    image.remove()
})
