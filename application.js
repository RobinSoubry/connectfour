
confirm("You are playing Connect 4, MVP edition");

var currentColor = "R";

var board = [["","","",""],
             ["","","",""],
             ["","","",""],
             ["","","",""]];

var boardRow = 3;

for (i=0; i<10; i++){
  var chosenColumn = prompt("Which column do you want?\nPick a number from 1 to 4");
  var placed = false;

  while (placed === false){
    var slot = board[boardRow][chosenColumn - 1];
    if (slot === ""){
      board[boardRow][chosenColumn - 1] = currentColor;
      console.log(board[boardRow][chosenColumn - 1]);

      console.log(board);
      placed = true;
    }else{
      if (boardRow == 0){
        alert("This column is full");
        console.log(board);
        placed = true;
      }
      else{
        boardRow -= 1;
        }
    }
  }
}