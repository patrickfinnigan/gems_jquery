$(document).ready(function() {
    var randomGoal = 0;
    var randomBlue = 0;
    var randomGreen = 0;
    var randomRed = 0;
    var randomYellow = 0;
    var totalGems = 0;
    var wins = 0;
    var losses = 0;

    // random number for the gem goal
    randomGoal = Math.floor((Math.random() * 100) + 30);
    $("#target-number").text(randomGoal);

    // a random number variable for each gem button
    randomBlue = Math.floor((Math.random() * 3) + 1);
    console.log(randomBlue);

    randomGreen = Math.floor((Math.random() * 10) + 3);
    console.log(randomGreen);

    randomRed = Math.floor((Math.random() * 18) + 10);
    console.log(randomRed);

    randomYellow = Math.floor((Math.random() * 25) + 18);
    console.log(randomYellow);

    $(".blueBtn").on("click", function() {
        alert("hey");
    });
});