// generate random number for the target number and for the crystals.


var targetScore = 0; 
var currentScore = 0
var wins = 0
var losses = 0

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

resetGame();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

function addValue(clickedCrystal) {
    cuurentScore += clickedCrystal.value
    $("#randomNumber").text(targetScore)
}

$("#blue").click(function() {
    addValue(crystals.blue)
})

$("#red").click(function() {
    addValue(crystals.red)
})