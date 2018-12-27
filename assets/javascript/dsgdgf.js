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
 
document.onkeyup = function (event) {
    playerGuess = String.fromCharCode(event.which).toUpperCase();
    checkInput(playerGuess);
    guessOver();
};

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
   $("#guesses").text(guessCount);
   $("#word").text(blankAnswer.join(" "));
   $("#wrong").text(wrongGuesses.join(" "));
   
}

function checkInput(letter) {
    var letterIn = false;

    for (var i = 0; i < wordLength; i++) {
        if (gameWord[i] === letter) {
            letterIn = true;
        }
    }
    if (letterIn) {
        for (var j = 0; j < wordLength; j++) {
            if (gameWord[j] === letter) {
                blankAnswer[j] = letter;
            }
        }
        
    } else {
        wrongGuesses.push(letter);
        guessCount--;

    }
    
}

function guessOver() {

    $("#guesses").text(guessCount);
    $("#word").text(blankAnswer.join(" "));
    $("#wrong").text(wrongGuesses.join(" "));
    
    if (wordLetters.toString() === blankAnswer.toString()) {
        winCount++;
        $(".win-count").text(winCount);
        alert("You win!");
        
        getWord();
    }
    else if (-1 < guessCount < 1) {
        guessCount=0
        lossCount++;
        $(".loss-count").text(lossCount);
        alert("Try again");
 
        getWord();
    }
 
 }

