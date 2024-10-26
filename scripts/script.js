$(document).ready(function () {
    let gameStarted = false;
    let gameLost = false;

    $('#start').on('mouseenter', function () {
        gameStarted = true;
        gameLost = false;
        startGame();
    });

    $('.boundary').on('mouseenter', function () {
        if (gameStarted === true) {
            gameLost = true;
            gameStarted = false;
            lostGame();
        }
    });

    $('#end').on('mouseenter', function () {
        if (gameStarted === true && gameLost === false) {
            gameStarted = false;
            completeGame();
        }
    });
});
