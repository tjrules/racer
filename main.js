$(document).ready(() => {
		
		// let $playerOne = $('#player1'); //document.getElementById('player1');
		// let $playerOneVal = $('$playerOne').css({left: '+=100'})
		// $('body').keydown(movePlayerOne); //document.addEventListener('keydown', movePlayerOne);
		// 	function movePlayerOne(){
		// 		//let playerOneVal = 0;
		// 		if(event.keyCode== 32){
		// 		$($playerOne).css({left: '+=100'});
		// 		}

		// 	// isOneFinish();
		// 	console.log()	
		// 		}


		// 	// function isOneFinish(){
		// 	// 	if ($playerOne.css('left') >= 950) {
		// 	// 	location.href = 'finish.html';
		// 	// 	}
		// 	// 	} 
		
// function movePlayerTwo(){
						// 	//ensures specific key is pressed for function to run
						// 	if(event.keyCode == 32){
						// 		playerTwoVal = playerTwoVal + 100;
						// 		console.log('working');
						// 		$playerTwo.css('left','px') = playerTwoVal + 'px';
						
						// 	}
						// 	isTwoFinish();
						// 	}

							let $playerOne = $('#player1');
							let playerOneVal = 0;
							$('body').keydown(movePlayerOne);
						
						function movePlayerOne(){
							if (event.keyCode == 32){
								playerOneVal = playerOneVal + 100;
								$playerOne.css('left', playerOneVal + "px");
								//($playerTwo).css({left: '+=100'});
							}
							isOneFinish();
							}

						function isOneFinish(){
							if (playerOneVal >= '950') {
								location.href = 'finish.html';
								}
								
							} 




							let $playerTwo = $('#player2');
							let playerTwoVal = 0;
							$('body').keydown(movePlayerTwo);
						
						function movePlayerTwo(){
							if (event.keyCode == 13){
								playerTwoVal = playerTwoVal + 100;
								$playerTwo.css('left', playerTwoVal + "px");
								//($playerTwo).css({left: '+=100'});
							}
							isTwoFinish();
							}

						function isTwoFinish(){
							if (playerTwoVal >= '950') {
								location.href = 'finish-2.html';
								}
								
							} 

// $('#playerTwo').click(() => {
// 	console.log('clicked')
// })

	
//$(document).keydown(function)

 
//$playerTwo.css('left') = playerTwoVal + 'px';

//$playerTwo.css('left', function(index){


	 // index += 100;



// });







// $($playerTwo).keydown(()=>{
// 		
// 		console.log('clicked');
// 		movePlayerTwo();
// 	//push the player element to the right by one increment each time a button is pressed
	
// }
// 	})

// $playerTwo.keydown(()=>{
		
// 		playerTwoVal = playerTwoVal + 100;
// 		$playerTwo.css('left','px');
// 		console.log('clicked');

// 	})



//if(keydown.characterCode == 32) {console.log(characterCode)}
//console.log(event.keyCode == 32);

//Grab the player element and create variables

//const $playerOne = $('#player1');  //
  //document.getElementById('player2');
//event

//event listener waiting for keydown to move players


//document.addEventListener('keydown', movePlayerTwo);
//starting position for players



//player 1 movement function

//ensures specific key is pressed for function to run
	//if(event.keyCode == 32){
	//increments players position every key press
	//playerOneVal = playerOneVal + 100;
	//push the player element to the right by one increment each time a button is pressed
	//playerOne.style.left = playerOneVal + 'px';


//Player 2 movement function

//if(event.keycode == '13'){


});
