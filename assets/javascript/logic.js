
var wordBank = ['MERCURY','VENUS', 'EARTH','MARS','JUPITER', 'URANUS', 'NEPTUNE','SATURN', 'PLUTO', 'MOON', 'SUN','ASTEROID','ROCKET','ASTRONAUT', 'ALIEN','UFO'];

var gameWord = '';

var blankAnswer = [];

var wordLength = 0;

var wrongGuesses = [];

var blanksGuesses = [];

var usedLetters = '';


wordBank[Math.floor(Math.random()*wordBank.length)];
// testing random word
console.log(word);

// display _ on the #letter-board to represent the mystery word 
var blankAnswer = [];
for (var i = 0; i < word.length; i++); {
    blankAnswer[i] = '_';

console.log(blankAnswer);
// $('$letter-board').text(blankAnswer);
}