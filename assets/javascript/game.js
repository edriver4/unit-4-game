// generate random number for the target number and for the crystals.
var lowerCrystalLimit = 1;
var upperCrystalLimit = 12;
var targetLowerLimit = 19;
var targetUpperLimit = 120;
var red_Num = 0;
var diamond_Num = 0;
var purple_Num = 0;
var blue_Num = 0;
var random_Num = 0; 
var newGame = true;

resetGame();

// get random numbers for the crystals and the target number
function randomTarget(targetLowerLimit, targetUpperLimit) {
    return Math.floor(Math.random() * (targetUpperLimit - targetLowerLimit)) + targetLowerLimit;
};
function getRandom(lowerCrystalLimit, upperCrystalLimit) {
    return Math.floor(Math.random() * (upperCrystalLimit - lowerCrystalLimit)) + lowerCrystalLimit;
};
getRandom();
function resetGame() {
    red_Num = getRandom(lowerCrystalLimit, upperCrystalLimit);
    diamond_Num = getRandom(lowerCrystalLimit, upperCrystalLimit);
    purple_Num = getRandom(lowerCrystalLimit, upperCrystalLimit);
    blue_Num = getRandom(lowerCrystalLimit, upperCrystalLimit);
    random_Num = randomTarget(targetLowerLimit, targetUpperLimit); 
};

