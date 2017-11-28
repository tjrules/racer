//JS logic

//Grab the player element
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');

document.addEventListener('keydown', movePlayer);
//push the player element to the right by one increment each time a button is pressed
let playerOneVal = 0;
function movePlayer(){
	playerOneVal = playerOneVal + 5;
	playerOne.style.left = playerOneVal + 'px';
}
//