$(function() {

  var currentTurn = 'X';
  var numTurn = 0;
  var imageToUse = 'images/x.png';
  var boardState = [['a','b','c'],
  ['d','e','f'],
  ['g','h','i']]

  // toggleTurn(currentTurn);

  $('.play-area').click(function(e) {
    processTurn(e);
  });

  function processTurn(e) {
    $(e.target).attr('src', imageToUse);
    var selected = $(e.target).parent().attr('class').split(' ')[0];
    updateBoardState(selected);
    numTurn++;
    console.log(numTurn);
    checkBoard();
    toggleTurn();
    $('.' + selected).off('click');
  }

  function checkBoard() {
    for (var row = 0; row < 3; row++) {
      if (boardState[row][0] == boardState[row][1] && boardState[row][1] == boardState[row][2]) {
        console.log('someone won!');
        gameWon();
      }
    }
    for (var col = 0; col < 3; col++) {
      if (boardState[0][col] == boardState[1][col] && boardState[1][col] == boardState[2][col]) {
        console.log('someone won!');
        gameWon();
      }
    }
    if (boardState[0][0] == boardState[1][1] && boardState[1][1] == boardState[2][2]) {
      console.log('someone won!');
      gameWon();
    }
    if (boardState[2][0] == boardState[1][1] && boardState[1][1] == boardState[0][2]) {
      console.log('someone won!');
      gameWon();
    }
    if (numTurn == 9) {
      console.log('Tied!')
      endGame();
    }
  }

  function updateBoardState(selected) {
    var row = selected[1];
    var col = selected[3];
    boardState[row][col] = currentTurn;
    console.log(boardState);
  };

  function toggleTurn() {
    if (currentTurn === 'X') {
      imageToUse = 'images/o.png';
      currentTurn = 'O';
    } else if (currentTurn === 'O') {
      imageToUse = 'images/x.png';
      currentTurn = 'X';
    };
  }


  function gameWon() {
    $('.play-area').off('click');
    endGame();
  }

  function endGame() {
    console.log('Game over!');
    $('.status').css('color', 'crimson');
    $('.status').text('Game over!');
    $('.play-again').show();
  }

});
