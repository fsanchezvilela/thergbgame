//inicializar los colores en un arreglo

var numSquares = 6;
var colors = [];
var pickedColor;											//Seleccionar el Color que tienes que adivinar
var squares = document.querySelectorAll(".square");										
var colorDisplay = document.getElementById("colorDisplay"); //display del color			
var messageDisplay = document.querySelector("#message"); 	//mensaje si fallas o es correcto
var h1 = document.querySelector("h1"); 						//Selecional el background del h1 y cambiarlo al colo ganador
var resetButton = document.querySelector("#reset");			//seleccionar el boton de reset game
var modeButtons = document.querySelectorAll(".mode"); 		/*var easyBtn = document.querySelector("#easyBtn"); var hardBtn = document.querySelector("#hardBtn"); codigo viejo con 2 modalidades*/


//inicializar el juego

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
 for (var i = 0; i < modeButtons.length; i++) {
	 modeButtons[i].addEventListener("click",function(){
	 modeButtons[0].classList.remove("selected");
	 modeButtons[1].classList.remove("selected");
	 this.classList.add("selected");
	 this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //ternary operator. condition > then > else solo para 2 
	reset();
  });
 }
}

function setupSquares(){
 for(var i = 0; i<squares.length; i++){						
	//add click listeners to squares
	squares[i].addEventListener("click",function(){					
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;			
		if(clickedColor === pickedColor){					
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor); 					
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		} 
	});	
  }
}

function reset(){
  colors = generateRandomColors(numSquares);   				//generate all new colors
  pickedColor = pickColor();								//pick a new random color from array
  colorDisplay.textContent = pickedColor;					//change colorDisplay to match picked Color
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  	for (var i = 0; i<squares.length; i++){					//change colors of squares
  		if(colors[i])	{ 									// comprara si existe un color que tiene match con el square como son 3 en tal caso solo llega hasta el 3ero
  			squares[i].style.display = "block";
  			squares[i].style.backgroundColor = colors[i];
  		} else {
  			squares[i].style.display = "none";
  		}
  	}
  h1.style.backgroundColor="steelblue";						//change background
}

resetButton.addEventListener("click", function(){  			//dom el boton para resetear
	reset();
});

//cambiar colores una vez que se termine el juego. al pickedCOlor
function changeColors(color) { 
	//loop through all squares
	for(var i = 0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}
//generar aleatoriamente un color para guess
function pickColor(){
	var random =Math.floor(Math.random() * colors.length); // agarrar numero entero aleatorio con el maximo lenght pero sin incluirlo valor entero de 1 a 5 si el array es de 6 <3 
	return colors[random];
}
// generar colores randoms para el array
function generateRandomColors(num){
	//make an array
	var arr= [];
	// repeat num times
	for(var i = 0; i<num; i++){
	//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
//funcion generar colores randoms
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}