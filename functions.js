let area1 = document.getElementById("myArea1");
let area2 = document.getElementById("myArea2");
let area3 = document.getElementById("myArea3");
let area4 = document.getElementById("myArea4");
let area5 = document.getElementById("myArea5");


let div1 = document.getElementById("gym");
let div2 = document.getElementById("oval");
let div3 = document.getElementById("chapel");
let div4 = document.getElementById("pool");
let div5 = document.getElementById("pylon");
/*-- START --*/

div1.style.display = "none";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
div5.style.display = "none";

area1.addEventListener("mouseover", function() {
    div1.style.display = "block";
});

area1.addEventListener("mouseout", function() {
  div1.style.display = "none";
});


/*-- END --*/

/*-- START --*/

area2.addEventListener("mouseover", function() {
    div2.style.display = "block";
});

area2.addEventListener("mouseout", function() {
  div2.style.display = "none";
});


/*-- END --*/

/*-- START --*/

area3.addEventListener("mouseover", function() {
    div3.style.display = "block";
});

area3.addEventListener("mouseout", function() {
  div3.style.display = "none";
});

/*-- END --*/

area4.addEventListener("mouseover", function() {
    div4.style.display = "block";

});

area4.addEventListener("mouseout", function() {
  div4.style.display = "none";
});


/*-- START --*/

area5.addEventListener("mouseover", function() {
    div5.style.display = "block";
});

area5.addEventListener("mouseout", function() {
  div5.style.display = "none";
});

/*-- END --*/