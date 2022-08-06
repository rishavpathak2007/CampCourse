var all = document.querySelector("#all-btn");
var ai = document.querySelector("#ai-btn");
var app = document.querySelector("#app-btn");
var web = document.querySelector("#web-btn");


all.addEventListener("click", function() {
	// alert("btn clicked");
	document.getElementById("first").style.display = "flex";
	document.getElementById("second").style.display = "flex";
	document.getElementById("third").style.display = "flex";
	document.getElementById("fourth").style.display = "flex";
	document.getElementById("fifth").style.display = "flex";
	document.getElementById("sixth").style.display = "flex";

});

ai.addEventListener("click", function() {
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "none";
	document.getElementById("fifth").style.display = "flex";
	document.getElementById("sixth").style.display = "flex";
});

app.addEventListener("click", function() {
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "flex";
	document.getElementById("fifth").style.display = "none";
	document.getElementById("sixth").style.display = "none";
});

web.addEventListener("click", function() {
	document.getElementById("first").style.display = "flex";
	document.getElementById("second").style.display = "flex";
	document.getElementById("third").style.display = "flex";
	document.getElementById("fourth").style.display = "none";
	document.getElementById("fifth").style.display = "none";
	document.getElementById("sixth").style.display = "none";
});


// ///////////////////////////////////////////////////////////////////////
// QUIZ
