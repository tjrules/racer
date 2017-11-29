//if(keydown.characterCode == 32) {console.log(characterCode)}
//JS logic

//Grab the player element and create variables
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');
//event

//event listener waiting for keydown to move players
document.addEventListener('keydown', movePlayerOne);
document.addEventListener('keydown', movePlayerTwo);
//starting position for players
let playerOneVal = 0;
let playerTwoVal = 0;


//player 1 movement function


function movePlayerOne(){
	
	//ensures specific key is pressed for function to run
	if(event.keyCode == 32){
	//increments players position every key press
	playerOneVal = playerOneVal + 100;
	//push the player element to the right by one increment each time a button is pressed
	playerOne.style.left = playerOneVal + 'px';
}
isOneFinish();
}

//Player 2 movement function

//if(event.keycode == '13'){

function movePlayerTwo(){
	//ensures specific key is pressed for function to run
	if(event.keyCode == 13){
	playerTwoVal = playerTwoVal + 100;
	//push the player element to the right by one increment each time a button is pressed
	playerTwo.style.left = playerTwoVal + 'px';
}
//declares function that checks for win
isTwoFinish();
}

function isOneFinish(){
	if (playerOneVal >= 950) {
		location.href = 'finish.html';
	}
} 

function isTwoFinish(){
	if (playerTwoVal >= 950) {
		location.href = 'finish-2.html';
	}
} 
