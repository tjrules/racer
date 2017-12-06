// class Game{
//   constructor(movePlayer, isPlayerFinish){
//     this.movePlayer = movePlayer;
//     this.isPlayerFinish = isPlayerFinish;
    
//   }   
// }

// class Move{
//   constructor(){

//   }
// }

// class Finish{
//   constructor(){
    
//   }
// }
// let movePlayerOne = new Game();
// let movePlayTwo = new Game();
// movePlayerOne;

class Player{
  constructor(value, keyCode, id){
    
    this.value = value;
    this.keyCode = keyCode;
    this.id = $(id);
  }

 // listen(movePlayer){
      
 //         }

 movePlayer(){
//   if (this.keyCode == 32){
//       this.value = this.value + 100;
//       console.log('working')
        this.css('left', this.value + "px");                
             }
//             }
  
  // isFinish(){
  //   if (this.value >= '950') {
  //               location.href = 'finish.html';
  //                            }
         
  //           }
            }

 
let playerOne = new Player(0, 32, '#player1');
let playerTwo = new Player(0, 13, '#player2');
// $('body').keydown();

// $("#player1").keydown($.proxy(function () {
// },this));

 
     //use original 'this'



// playerOne.movePlayer();
// let $playerOne = $('#player1');
//               let playerOneVal = 0;
//               $('body').keydown(movePlayerOne);
            
//             function movePlayerOne(){
//               if (event.keyCode == 32){
//                 playerOneVal = playerOneVal + 100;
//                 $playerOne.css('left', playerOneVal + "px");
//                 //($playerTwo).css({left: '+=100'});
//               }
//               isOneFinish();
//               }

//             function isOneFinish(){
//               if (playerOneVal >= '950') {
//                 location.href = 'finish.html';
//                 }
                
//               } 


//($playerTwo).css({left: '+=100'});