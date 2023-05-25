var myDiv = document.getElementById("myDiv");

window.addEventListener("mousemove", function(event) {
  myDiv.style.top = event.clientY -20 + "px";
  myDiv.style.left = event.clientX -70 + "px";
});

let area1 = document.getElementById("myArea1");
let area2 = document.getElementById("myArea2");
let area3 = document.getElementById("myArea3");
let area4 = document.getElementById("myArea4");
let area5 = document.getElementById("myArea5");
let area6 = document.getElementById("myArea6");
let area7 = document.getElementById("myArea7");
let area8 = document.getElementById("myArea8");
let area9 = document.getElementById("myArea9");
let area10 = document.getElementById("myArea10");

let div1 = document.getElementById("gym");
let div2 = document.getElementById("oval");
let div3 = document.getElementById("chapel");
let div4 = document.getElementById("pool");
let div5 = document.getElementById("pylon");
let div6 = document.getElementById("guard");
let div7 = document.getElementById("mabini");
let div8 = document.getElementById("pe");
let div9 = document.getElementById("tennis");
let div10 = document.getElementById("nut");
/*-- START --*/

div1.style.display = "none";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
div5.style.display = "none";
div6.style.display = "none";
div7.style.display = "none";
div8.style.display = "none";
div9.style.display = "none";
div10.style.display = "none";

area1.addEventListener("mouseover", function() {
    div1.style.top = event.clientY + "px";
    div1.style.left = event.clientX + "px";
    div1.style.display = "block";
});

area1.addEventListener("mouseout", function() {
  div1.style.display = "none";
});



area2.addEventListener("mouseover", function() {
    div2.style.top = event.clientY -200  + "px";
    div2.style.left = event.clientX + "px";
    div2.style.display = "block";
});

area2.addEventListener("mouseout", function() {
  div2.style.display = "none";
});


area3.addEventListener("mouseover", function() {
    div3.style.top = event.clientY -200 +"px";
    div3.style.left = event.clientX + "px";
    div3.style.display = "block";
});

area3.addEventListener("mouseout", function() {
  div3.style.display = "none";
});


area4.addEventListener("mouseover", function() {
    div4.style.top = event.clientY + "px";
    div4.style.left = event.clientX + "px";
    div4.style.display = "block";
});

area4.addEventListener("mouseout", function() {
  div4.style.display = "none";
});


area5.addEventListener("mouseover", function() {
    div5.style.top = event.clientY -200+ "px";
    div5.style.left = event.clientX + "px";
    div5.style.display = "block";
});

area5.addEventListener("mouseout", function() {
  div5.style.display = "none";
});


area6.addEventListener("mouseover", function() {
    div6.style.top = event.clientY -200 + "px";
    div6.style.left = event.clientX + "px";
    div6.style.display = "block";
});

area6.addEventListener("mouseout", function() {
  div6.style.display = "none";
});

area7.addEventListener("mouseover", function() {
    div7.style.top = event.clientY + "px";
    div7.style.left = event.clientX + "px";
    div7.style.display = "block";
});

area7.addEventListener("mouseout", function() {
  div7.style.display = "none";
});


area8.addEventListener("mouseover", function() {
    div8.style.top = event.clientY + "px";
    div8.style.left = event.clientX + "px";
    div8.style.display = "block";
});

area8.addEventListener("mouseout", function() {
  div8.style.display = "none";
});


area9.addEventListener("mouseover", function() {
    div9.style.top = event.clientY + "px";
    div9.style.left = event.clientX + "px";
    div9.style.display = "block";
});

area9.addEventListener("mouseout", function() {
  div9.style.display = "none";
});

area10.addEventListener("mouseover", function() {
    div10.style.top = event.clientY - 200 + "px";
    div10.style.left = event.clientX + "px";
    div10.style.display = "block";
});

area10.addEventListener("mouseout", function() {
  div10.style.display = "none";
});

