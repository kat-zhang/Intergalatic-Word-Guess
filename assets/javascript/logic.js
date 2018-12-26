
var wordBank = ['MERCURY','VENUS', 'EARTH','MARS','JUPITER', 'URANUS', 'NEPTUNE','SATURN', 'PLUTO', 'MOON', 'SUN','ASTEROID','ROCKET','ASTRONAUT', 'ALIEN','UFO'];

var gameWord = '';

var wordLetters= [];

var wordLength = 0;

var wrongGuesses = [];

var blankAnswer = [];

var usedLetters = '';

var winCount = 0;
var lossCount = 0;
var guessCount = 9;

getWord();
function getWord() {
// display guessings remaining and wrong guesses
    guessCount = 9;
    $("#guesses").text(guessCount);
    $("#wrong").text(wrongGuesses.join(""));

// generate random guessing word
    gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(gameWord);
// determine how many blanks to display
    wordLetters = gameWord.split("");
    wordLength = wordLetters.length;

    blankAnswer = [];
    wrongGuesses = [];
// display the appropirate amount of blanks
    for (var i = 0; i < wordLength;  i++) {
        blankAnswer.push("_");
    }

    console.log(blankAnswer);
   

};