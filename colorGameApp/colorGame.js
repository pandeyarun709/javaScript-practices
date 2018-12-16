var numSquare = 6;
var color = genrateRandomColor(numSquare);
/* [ "rgb(255, 0, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 0, 255)",
			"rgb(125, 125, 125)",
			"rgb(205, 10, 200)",
			"rgb(0, 215, 155)"
		];
*/
var square = document.getElementsByClassName('square');
var displayColor = document.getElementById('displayColor');
var heading = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var message =  document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var pickedColor = pickesColor();


displayColor.textContent = pickedColor;

/*######################### checking winnig #######################*/


for(var i =0 ;i < square.length;i++){
	
	//adding color to boxes
	 putRandomColor();  
    //checing selected color correct or not !!

	square[i].addEventListener("click" , function() {

		var selectedColor = this.style.backgroundColor;

		if(selectedColor === pickedColor){

			makeSameColor(selectedColor);
			heading.style.backgroundColor = selectedColor;

			resetButton.textContent = "Play Again ?";
			message.textContent = "correct !!";

			//alert("You wins !!!");
		}
		else {
			message.textContent = "Try Again !!";
			this.style.backgroundColor = "#232323";
            //alert("try again");

		}
	});
}

//easy mode button !!!!!!!!
easyBtn.addEventListener("click" , function(){
	numSquare = 3;
	resetAll();

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

});

//hard mode button !!!
hardBtn.addEventListener("click" , function() {
	numSquare = 6;
	resetAll();

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
});



// reset the all color and game
resetButton.addEventListener("click" , function(){
  	
  	resetAll();
});




/*#################################### All functions ####################################*/

//put random color in boxes

function putRandomColor(){

	for (var i = 0; i < square.length; i++) {
		
		if(color[i]){
			square[i].style.backgroundColor = color[i]; 
			square[i].style.display = "block";
		}else{
			square[i].style.display = "none";
		}
		
	}
}



//change all boxes to same colors
function makeSameColor(col){
	for(var j =0; j < square.length ;j++){
		square[j].style.backgroundColor = col; 
	}

}




// pickes random color that have to guess
function pickesColor() {

	var rand = Math.floor(Math.random() * (color.length)) ;
	return color[rand];
}

//generate random color
function genrateRandomColor(length){
	var color = [];
	for (var i = 0; i < length; i++) {
		var col = getRandomColor();
		color.push(col);
   }

   return color;

}

//generate colors
function getRandomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
    var s = "rgb("+r+", "+b+", "+g+")";
    return s;
}



//reset all the game and modes
function resetAll(){

	color = genrateRandomColor(numSquare);
	
	putRandomColor();

	pickedColor = pickesColor();

	displayColor.textContent = pickedColor;
	heading.style.backgroundColor = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New colors";

}