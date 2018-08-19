var colours = [];
var pickedColour;
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#newColours");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	reset();
	setupModeButtons();
	setupSquares();
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selectedbtn");
			modeButtons[1].classList.remove("selectedbtn");
			this.classList.add("selectedbtn");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColour = this.style.backgroundColor;
			if(clickedColour === pickedColour){
				messageDisplay.textContent = "Correct!";
				changeColours(clickedColour);
				h1.style.backgroundColor = pickedColour;
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		})
	};
}

function reset(){
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selectedbtn");
// 	hardBtn.classList.remove("selectedbtn");
// 	numSquares = 3;
// 	colours = generateRandomColours(numSquares);
// 	pickedColour = pickColour();
// 	colourDisplay.textContent = pickedColour;
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue"
// 	for(var i = 0; i < squares.length; i++){
// 		if(colours[i]){
// 			squares[i].style.backgroundColor = colours[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selectedbtn");
// 	easyBtn.classList.remove("selectedbtn");
// 	numSquares = 6;
// 	colours = generateRandomColours(numSquares);
// 	pickedColour = pickColour();
// 	colourDisplay.textContent = pickedColour;
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue"
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colours[i];
// 			squares[i].style.display = "block";
// }
// });

resetButton.addEventListener("click", reset);

function changeColours(colour){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}