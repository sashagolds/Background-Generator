var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

// SET VALUE OF COLOR1 INPUT & COLOR2 INPUT TO DEFAULTS (FROM HTML TAGS)
color1.value = "#FEFE00";
color2.value = "#FF0102";

// GET COMPUTED BACKGROUND STYLE FROM BODY ELEMENT
// NOTE: THIS OUTPUTS TOO MANY PROPS. BACKGROUND-IMAGE DOESNT WORK
css.textContent = window.getComputedStyle(body).background;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";"
}

function randomColors() {
	// CREATE RANDOM HEX CODES (CODE FROM www.paulirish.com)
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	// ASSIGN HEX CODES TO COLOR INPUTS
	color1.value = randomColor1;
	color2.value = randomColor2;
}

button.addEventListener("click", randomColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);