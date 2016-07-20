// $(function() {
    var X_IMAGE = 'images/x.png';
    var O_IMAGE = 'images/o.png';
    var playerState = {
        'x': 'X',
        'x_img': X_IMAGE,
        'o': 'O',
        'o_img': O_IMAGE
    };

    var lastPlayed;
    var BLANK_IMAGE = 'images/blank.png';
    var currentTurn;
    var numTurn;
    var imageToUse;
    var boardState;




    function setPlayAgainButtonActive() {
        $('.play-again').off('click').on('click', newGame);
        $('.play-again').show();
    }

    function setPlayAgainButtonInactive() {
        $('.play-again').off('click');
        $('.play-again').hide();
    }

    function updateCurrentTurn() {
        $('.status').text('Current Turn: ' + currentTurn);
    }

    function setTurnTo(player) {
        currentTurn = playerState[player];
        imageToUse = playerState[player + '_img'];
    }

    function setPlayAreaActive() {
        $('.play-area').off('click').on('click', processTurn);
    }

    function setPlayAreaInactive() {
        $('.play-area').off('click');
    }

    function resetBoardState() {
        boardState = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
        ];
    }

    function resetBoardImages() {
        $.each($('.play-area img'), function(n, imgTag) {
            $(imgTag).attr('src', BLANK_IMAGE);
        });
    }

    function resetNumTurn() {
        numTurn = 0;
    }

    function incrementNumTurn() {
        numTurn++;
    }

    function newGame() {
        setPlayAgainButtonInactive();
        setTurnTo('x');
        updateCurrentTurn();
        resetNumTurn();
        resetBoardState();
        resetBoardImages();
        setPlayAreaActive();
    }

    function setSquare(e) {
        $(e.target).attr('src', imageToUse);
    }

    function getSquare(e) {
        return $(e.target).parent().attr('class').split(' ')[0];
    }

    function disableSquare(square) {
        $('.' + square).off('click');
    }

    function processTurn(e) {
        // $(e.target).parent().attr('disabled', true);
        console.log('Event triggered')
        setSquare(e);
        var selected = getSquare(e);
        updateBoardState(selected);
        incrementNumTurn();
        toggleTurn();
        updateCurrentTurn();
        checkBoard();
        disableSquare(selected);

    }

    function gameOver(winner) {
        if (winner == 'T') {
            $('.status').text('TIE!');
        } else {
            $('.status').text(winner + ' WON');
        }
        setPlayAreaInactive();
        setPlayAgainButtonActive();
    }

    function checkBoard() {
        var winner = 'T';
        for (var row = 0; row < 3; row++) {
            if (boardState[row][0] == boardState[row][1] && boardState[row][1] == boardState[row][2]) {
                winner = boardState[row][0];
            }
        }

        for (var col = 0; col < 3; col++) {
            if (boardState[0][col] == boardState[1][col] && boardState[1][col] == boardState[2][col]) {
                winner = boardState[0][col];
            }
        }

        if (boardState[0][0] == boardState[1][1] && boardState[1][1] == boardState[2][2]) {
            winner = boardState[0][0];
        } else if (boardState[2][0] == boardState[1][1] && boardState[1][1] == boardState[0][2]) {
            winner = boardState[2][0];
        }

        if (numTurn == 9 && winner == 'T') {
            gameOver(winner);
        } else if (winner != 'T' && numTurn != 9) {
            gameOver(winner);
        } else if (numTurn == 9) {
            gameOver(winner);
        }
    }

    function updateBoardState(selected) {
        var row = selected[1];
        var col = selected[3];
        boardState[row][col] = currentTurn;
    }

    function toggleTurn() {
        if (currentTurn === 'X') {
         setTurnTo('o');
     } else if (currentTurn === 'O') {
         setTurnTo('x');
     }
    }

    $('.tester').click(function() {
        $('.jasmine_html-reporter').toggle();
    });

 // });

