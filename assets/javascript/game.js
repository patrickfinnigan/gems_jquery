var randomGoal = 0;
var randomBlue = 0;
var randomGreen = 0;
var randomRed = 0;
var randomYellow = 0;
var totalGems = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {
    console.log(totalGems);

    var randomGen = function (range, offset) {
        return Math.floor((Math.random() * range) + offset);
    }

    function startGame() {
        // random number for the gem goal
        randomGoal = randomGen(100, 30)
        $("#target-number").text(randomGoal);

        // a random number variable for each gem button
        randomBlue = randomGen(1, 3);
        console.log(randomBlue);
        $(".blueBtn").attr("data-value", randomBlue);
        // adding button value to DOM element

        randomGreen = randomGen(10, 3)
        console.log(randomGreen);
        $(".greenBtn").attr("data-value", randomGreen);

        randomRed = randomGen(18, 10)
        console.log(randomRed);
        $(".redBtn").attr("data-value", randomRed);

        randomYellow = randomGen(25, 18)
        console.log(randomYellow);
        $(".yellowBtn").attr("data-value", randomYellow);
    }

    startGame();

    $(".blueBtn").on("click", function () {
        var btnValue = $(this).data("value")
        totalGems += btnValue;
        console.log(totalGems);
        $("#gemCount").text(totalGems);
        checkStatus();
    });

    $(".greenBtn").on("click", function () {
        var btnValue = $(this).data("value")
        totalGems += btnValue;
        console.log(totalGems);
        $("#gemCount").text(totalGems);
        checkStatus();
    });

    $(".yellowBtn").on("click", function () {
        var btnValue = $(this).data("value")
        totalGems += btnValue;
        console.log(totalGems);
        $("#gemCount").text(totalGems);
        checkStatus();
    });

    $(".redBtn").on("click", function () {
        var btnValue = $(this).data("value")
        totalGems += btnValue;
        console.log(totalGems);
        $("#gemCount").text(totalGems);
        checkStatus();
    });


    function checkStatus() {
        if (totalGems === randomGoal) {
            alert("You Win!");
            wins++;
        } else if (totalGems > randomGoal) {
            alert("You Lose!");
            losses++;
            console.log(losses);
        }
    }
});