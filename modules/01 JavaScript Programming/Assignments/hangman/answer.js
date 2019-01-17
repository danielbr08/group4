const phrase1 = 'Foo bar baz';
const phrase2 = 'Fow dal guy';
const phrase3 = 'key ley nam';

const phrases = [phrase1,phrase2,phrase3];
// var phraseRandom = getPharseRandom(phrases);
// console.log(phraseRandom);

// const letters = ['a', 'f'];

// const finds = getFindsStr(phraseRandom.split(''), letters);
// //console.log(finds);

function getPharseRandom(phrases){
    randIndex = Math.floor((Math.random() * phrases.length));
    return phrases[randIndex];
}

function isWon(phrase, letters){
    return (letters.every(function(value) { return phrase.indexof(value) !== -1}));
}

function isInPhrase(phrase, letter){
    return phrase.some(item=> item === letter);
}

function isLetterAlreadyFound(letterToAdd,foundedLetters){
    if(foundedLetters.indexOf(letterToAdd) === -1){
        return flase;
    }
    return true;
};

function getFindsStr(phrase, letters){
  var foundedLetters ='';
  phrase.forEach(function(element) {
      if(element === ' '){
        foundedLetters += element + element + element;
      }
      else if(letters.indexOf(element) !== -1){
          foundedLetters += element + ' ' ;
      }
      else{
          foundedLetters += '_' + ' ';
      }

  }, this);
  return foundedLetters;
}

function runGame(phrases){
    var life = 10,findsStr = null,letter ='',foundedLetters = new Array();
    var phrase = getPharseRandom(phrases).split('');// return array of chars
    console.log(phrase);
    while( life > 0 && !isWon(phrase, foundedLetters)){
        console.log("Remaining life are:",life);
        findsStr = getFindsStr(phrase, letters);
        console.log(findsStr);
        letter = getUserInput("Please choose a letter");//Get new letter from user
        if(!isInPhrase(phrase, letter)){
            life--;
        }
        else{
            if(!isLetterAlreadyFound(letter)){
                foundedLetters.push(letter);
            }
        }
    }
    if (life === 0){
        console.log("You lost!");
    }
    else{
        console.log("You won!");
    }
};

function getUserInput(message,length){
  var readline = require('readline-sync');
  var input = readline.question(message);
  return input;
}

runGame(phrases);