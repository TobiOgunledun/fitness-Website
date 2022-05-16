var menuOpen = document.getElementById("open");
var menuClose = document.getElementById("close");
var navMenu = document.getElementById("nav-menu");
var heroSec = document.getElementById("hero-section");
var heroSec2 = document.getElementById("hero-section2");
var navLinks = document.getElementById("navlink");
var popUp = document.getElementById("popup-view");

menuOpen.onclick = function (){
    navMenu.style.right = 0;
    heroSec.style.display = "none";
    heroSec2.style.display = "none";

}
menuClose.onclick = function (){
    navMenu.style.right = "";
    heroSec.style.display = "flex";
    heroSec2.style.display = "";
    popUp.style.top = "";

}
function showPop(){
    popUp.style.top = "20%";
    
}
