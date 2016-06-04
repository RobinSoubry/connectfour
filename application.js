$(document).ready(function(){
  var game = new NewGame;
  // game.playGame();

});

//  JQuery
//    play button event listener here
//

var NewGame = function() {
  confirm("You are playing Connect 4, MVP edition");
  this.currentGame = [
    ["","","",""],
    ["","","",""],
    ["","","",""],
    ["","","",""]
  ];
};

NewGame.prototype.whoseTurn = function() {
  var flattenedBoard = [].concat.apply([], this.currentGame);

  var redCount = 0;
  var blackCount = 0;
  var emptySpaces = 0;

  for(i = 0; i < flattenedBoard.length; i++) {

    if(flattenedBoard[i] === "R") {
      redCount += 1
    } else if (flattenedBoard[i] === "B") {
      blackCount += 1
    } else {
      emptySpaces += 1
    };

  };

  if (redCount > blackCount) {
    currentColor = "B"
  } else {
    currentColor = "R"
  };

  console.log(currentColor);
  return currentColor;
};

NewGame.prototype.playGame = function() {

  var currentColor = this.whoseTurn();
  var boardRow = 3;

  for (i=0; i<10; i++) {
    var chosenColumn = prompt("Which column do you want?\nPick a number from 1 to 4");
    var placed = false;
      while (placed === false) {
      };
      var slot = this.currentGame[boardRow][chosenColumn - 1];

      if (slot === "") {
        this.currentGame[boardRow][chosenColumn - 1] = currentColor;
        console.log(this.currentGame[boardRow][chosenColumn - 1]);

        console.log(this.currentGame);
        placed = true;
      } else {

        if (boardRow == 0) {
          alert("This column is full");
          console.log(this.currentGame);
          placed = true;
        } else {
          boardRow -= 1;
        };

      };

  };

};

NewGame.prototype.redWins = "R" * 4;
NewGame.prototype.blackWins = "B" * 4;

NewGame.prototype.horizontalWin = function(){
  
  for(i = 0; i < currentGame.length; i++){
    if (currentGame[i].join() === this.redWins) {
      return "Red Wins"
    } else if (currentGame[i].join() === this.blackWins) {
      return "Black Wins"
    }
  }
};

NewGame.prototype.verticalWin = function(){

  var transpose = function(a)  { 
    return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
  }
  transpose(currentGame);
  for(i = 0; i < currentGame.length; i++){
    if (currentGame[i].join() === this.redWins) {
      return "Red Wins"
    } else if (currentGame[i].join() === this.blackWins) {
      return "Black Wins"
    }
  }  
};

// NewGame.prototype.diagonalWin = function(){
  
// };
   
