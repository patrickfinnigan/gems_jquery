$(document).ready(function() {
    var randomGoal = 0;
    var randomBlue = 0;
    var randomGreen = 0;
    var randomRed = 0;
    var randomYellow = 0;
    var totalGems = 0;

    randomGoal = Math.floor((Math.random() * 100) + 30);
    $("#target-number").text(randomGoal);

    randomBlue = Math.floor((Math.random() * 3) + 1);
    console.log(randomBlue);
});