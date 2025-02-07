var numSquares= 6;
var colors = generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	numSquares=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background=colors[i];
		}
		else{squares[i].style.display="none"}
	}
})
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block"
	}

})

resetButton.addEventListener("click",function(){
	//generate all nre colors
	colors= generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor()
	// change colorDisplay to math picked color
	colorDisplay.textContent= pickedColor;
	this.textContent="New colors";
	messageDisplay.textContent="";
	//change colors of squares
	for(var i=0; i < squares.length; i++){
	squares[i].style.background=colors[i];
	}
	h1.style.background= "steelblue";
	


})

colorDisplay.textContent= pickedColor;

for(var i=0; i < squares.length; i++){
	// add initial color to squares
	squares[i].style.background = colors[i];
	// add click listener to squares
	squares[i].addEventListener("click", function(){
		// grab color of cliked square and compare to picked color
		var clickedColor= this.style.background;
		if(clickedColor== pickedColor){
			messageDisplay.textContent="Corect!"
			changeColors(clickedColor);
			h1.style.background= clickedColor;
			resetButton.textContent="Play Again?"
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try again!";
		}
	})
}

function changeColors(color){
	// loop all squares
	for(var i=0; i < squares.length; i++){
		// change each color to mathch the give right color
		squares[i].style.background= color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	for(var i=0; i<num;i++){
		//get random color and push to array
		arr.push(randomColor()) 
	}
	//return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255 and green and blue
	var r=Math.floor(Math.random()*256) // for red
	var g=Math.floor(Math.random()*256) // for green
	var b=Math.floor(Math.random()*256) // for blue
	 
	//"rgb(" + r + "," + g +"," + b +")"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





