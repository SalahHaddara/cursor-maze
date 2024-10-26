$(document).ready(function () {
    var gameInProgress = false;

    $('#start').on('mouseenter', function () {
        if (!gameInProgress) {
            gameInProgress = true;
            startGame();
        }
    });

    $('.boundary').on('mouseenter', function () {
        if (gameInProgress) {
            gameInProgress = false;
            lostGame();
        }
    });

    $('#end').on('mouseenter', function () {
        if (gameInProgress) {
            gameInProgress = false;
            completeGame();
        }
    });
});
