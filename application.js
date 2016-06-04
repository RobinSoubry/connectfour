
confirm("You are playing Connect 4, MVP edition");

var NewGame = function(){
 var currentGame = [["","","",""],
 ["","","",""],
 ["","","",""],
 ["","","",""]];
};

NewGame.prototype.whoseTurn = funtion(){
  var flattenedBoard = [].concat.apply([], currentGame);
  
  var redCount = 0;
  var blackCount = 0;
  var emptySpaces = 0;
  
  for(i = 0; i < flattenedBoard.length; i++){
    if(flattenedBoard[i] === "R") {
     redCount += 1
   } else if (flattenedBoard[i] === "B") {
     blackCount += 1  
   } else {
     emptySpaces += 1
   }  
  }

 if (redCount > blackCount){
  currentColor = "B"
} else {
  currentColor = "R"
}
console.log(currentColor);
return currentColor; 
};

NewGame.prototype.playGame = function(){

  var currentColor = this.whoseTurn();
  var boardRow = 3;

  for (i=0; i<10; i++){
    var chosenColumn = prompt("Which column do you want?\nPick a number from 1 to 4");
    var placed = false;

    while (placed === false){
      var slot = currentGame[boardRow][chosenColumn - 1];
      if (slot === ""){
        currentGame[boardRow][chosenColumn - 1] = currentColor;
        console.log(currentGame[boardRow][chosenColumn - 1]);

        console.log(currentGame);
        placed = true;
      }else{
        if (boardRow == 0){
          alert("This column is full");
          console.log(currentGame);
          placed = true;
        }
        else{
          boardRow -= 1;
        }
      }
    }
  }
};