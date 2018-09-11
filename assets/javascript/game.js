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
    crystals.purple.value = getRandom(1, 12)
    crystals.blue.value = getRandom(1, 12)
    crystals.red.value = getRandom(1, 12)
    targetScore = getRandom(19, 120)

    $("#randomNumber").text(targetScore)
    console.log('crystals here=>', crystals)
    console.log('DAT target score ===>', targetScore)
};
// This function adds the crystal's value to your current score.
function addValue(clickedCrystal) {
    currentScore += clickedCrystal.value
    $("#currentScore").text("Your Score:" + currentScore);
}

$("#blue").click(function() {
    addValue(crystals.blue)
})

$("#red").click(function() {
    addValue(crystals.red)
})