// Variables for the target score, current score, wins and losses.
var targetScore = 0; 
var currentScore = 0
var wins = 0
var losses = 0
// Created a variable crystals and made it an object.
var crystals = {
    diamond: {
        name: "Diamond",
        value: 0,
    },
    purple: {
        name: "Purple",
        value: 0
    },
    blue: {
        name: "Blue",
        value: 0,
    },
    red: {
        name: "Red",
        value: 0,
    }
}
// Calling the reset game function...It works because javascript checks to see if any variables are defined first before running any code.
resetGame();
// Function that generates a random number for both the min and max value. 
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Reset game function, I use the the get random function and define the minimum and maximum number for the crystals as well as the target score.
// The get random function within the reset function executes a random number b/w 19 and 120 for the target score and random number b/w 1 and 12 for the crystals.
function resetGame() {
    crystals.diamond.value = getRandom(1, 12);
    crystals.purple.value = getRandom(1, 12);
    crystals.blue.value = getRandom(1, 12);
    crystals.red.value = getRandom(1, 12);
    targetScore = getRandom(19, 120);
    currentScore = 0;
    $("#currentScore").text("Your Score: " + currentScore);
    $("#randomNumber").text(targetScore);
    console.log('crystals here=>', crystals);
    console.log('DAT target score ===>', targetScore);
};
// This function adds the crystal's value to your current score.
function addValue(clickedCrystal) {
    currentScore += clickedCrystal.value
    $("#currentScore").text("Your Score: " + currentScore);
    if (currentScore == targetScore){
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }else if(currentScore > targetScore){
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
    }
}
// This function adds the value of the blue crystal which goes to the user's current score when it is clicked.
$("#blue").click(function() {
    addValue(crystals.blue);
})
// This function adds the value of the red crystal which is then added to the user's current score when the the crystal is clicked.
$("#red").click(function() {
    addValue(crystals.red);
})
// This function adds the value of the purple crystal which is then added to the user's current score when the the crystal is clicked.
$("#purple").click(function() {
    addValue(crystals.purple);
})
// This function adds the value of the diamond crystal which is then added to the user's current score when the the crystal is clicked.
$("#diamond").click(function() {
    addValue(crystals.diamond);
})
// Function that keeps track of score.

// What happens if the player wins the game? 
    //The game ends and we reset the game.
    //Alert the player that they have won the game.
    //The player's win score goes up by one.
  
// What happens if the player looses the game?
    //The player is alerted that they have lost the game.
    //The player's losses count goes up by one.
    //The game resets but does not reset the score.