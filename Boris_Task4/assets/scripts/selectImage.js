/* Задача 4:
  Имате неподр. списък с хип.връзки и картинки. Напишете скрипт ,който сменя 
  картинката при заставане в/у хип.връзката.
*/


// var p1 = document.querySelector("#p1");
// var img1 = document.querySelector("#img1");

// var p2 = document.querySelector("#p2");
// var img2 = document.querySelector("#img2");

// var p3 = document.querySelector("#p2");
// var img3 = document.querySelector("#img2");

img1.setAttribute("display", "none");

p1.addEventListener("mouseover", function() {
  var pic1 = document.querySelector("#pic1");
  img1.setAttribute("src", "./images/pic1.jpg");
});

p1.addEventListener("mouseout", function() {
  img1.setAttribute("src", "");
});

img2.setAttribute("display", "none");

p2.addEventListener("mouseover", function() {
  var pic2 = document.querySelector("#pic2");
  img2.setAttribute("src", "./images/pic2.jpg");
});

p2.addEventListener("mouseout", function() {
  img2.setAttribute("src", "");
});

img3.setAttribute("display", "none");

p3.addEventListener("mouseover", function() {
  var pic3 = document.querySelector("#pic3");
  img3.setAttribute("src", "./images/pic3.jpg");
});

p3.addEventListener("mouseout", function() {
  img3.setAttribute("src", "");
});
