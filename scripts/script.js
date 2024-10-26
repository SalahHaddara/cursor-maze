$(document).ready(function () {
    let gameStarted = false;
    let gameLost = false;

    $('#start').on('mouseenter', function () {
        gameStarted = true;
        gameLost = false;
        $('#status').text("Game Started");
    });

    $('.boundary').on('mouseenter', function () {
        if (gameStarted === true) {
            gameLost = true;
            gameStarted = false;
            $('#status').text("Game Lost");
        }
    });

    $('#end').on('mouseenter', function () {
        if (gameStarted === true && gameLost === false) {
            gameStarted = false;
            $('#status').text("Congratulations!");
        }
    });
});
