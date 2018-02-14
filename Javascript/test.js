//DOM Practice


// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function() {
//     if (isBlue) {
//         body.style.background = "White";
//     } else {
//         body.style.background = "#3498db";
//     }
//     isBlue = !isBlue;
// }, 1000)

// var tag = document.getElementById("highlight")
// var tags = document.getElementsByClassName("bolded");
// console.log(tags[0]);
// var tags = document.getElementsByTagName("li");
// console.log(tags[0]);
// var tag = document.querySelector("#highlight");
// var tag = document.querySelector(".bolded"); // returns only the first match
// var h1 = document.querySelectorAll("h1"); //returns all that match
// var tag = document.querySelectorAll(".bolded");

// var link = document.querySelector("a");
// link.getAttribute("href");//www.google.com
// //change href attribute
// link.setAttribute("href","http://www.dogs.com");//http needed to go to site, otherwise looks for local

// //to change the image src
// var img = document.querySelector("img");
// img.setAttribute("src","corgi.png");//<img src= "corgi.png">

var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
});