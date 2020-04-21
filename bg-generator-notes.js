// GET EMPTY H3 ELEMENT, ASSIGN TO VAR
var css = document.querySelector("h3");
// GET COLOR SELECTOR INPUT, ASSIGN TO COLOR 1
var color1 = document.querySelector(".color1");
// // GET COLOR SELECTOR INPUT, ASSIGN TO COLOR 2
var color2 = document.querySelector(".color2");
// // GET BODY (WITH GRADIENT ID), ASSIGN TO VAR
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// console.log("liner-gradient(to right, " + color1.value + ", " + color2.value + ");")

// // ADD EVENT LISTENER TO COLOR1 INPUT
// color1.addEventListener("input", function() {
// 	// SET BACKGROUND RULE OF BODY STYLE TO COLOR1 INPUT
// 	// Note: do NOT include ';' that normally goes on end of CSS rule
// 	// Note: include color1 AND color2 var
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })
// 	// SET BACKGROUND RULE OF BODY STYLE TO COLOR2 INPUT 
// color2.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// DRY METHOD + CSS.TEXTCONTENT

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value 
	+ ")";

	// GET BACKGROUND RULE FROM BODY VAR, ADD AS TEXT CONTENT TO H3, PLUS A ";"
	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Note: Do NOT call the function, as it is being run autoatmically by the Event Listner
// i.e.: color1.addEventListener("input", setGradient());

// Another way to do this would be to define function setGradient, then call an 'onclick="setGradient' directly in the HTML on the input elements