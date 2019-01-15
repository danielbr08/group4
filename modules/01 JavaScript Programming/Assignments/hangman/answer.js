// const phrase = 'Foo bar baz';
// const letters = ['a', 'f'];
// const finds = getFindsStr(phrase, letters);
// console.log(finds);

// var getPharseRandom = function(phrases){
//     randIndex = Math.floor((Math.random() * phrases.length) + 1);
//     return phrases[randIndex];
// }

// var isWon = function(phrase, letters){
//     return (letters.every(function(value) { return phrase.indexof(value) !== -1}));
// }

// var getFindsStr = function(phrase, letters){
//     var foundedLetters = '';
//     phrase.forEach(function(element,index) {
//         if(letters.indexof(element,index) != -1){
//             foundedLetters += element;
//         }
//         else{
//             foundedLetters += '_';
//         }

//     }, this);
//     return foundedLetters;
// }

// var isInPhrase = function(phrase, letter){
//     return phrase.some(item=> item === letter);
// }

// var isLetterAlreadyFound = function(letterToAdd,foundedLetters){
//     if(foundedLetters.indexof(letterToAdd) === -1){
//         return flase;
//     return true;
// }

// var runGame = function(phrases){
//     var life = 10,findsStr = null,letter ='',foundedLetters = new Array();
//     var phrase = getPharseRandom(phrases);// return array of chars
//     While(life > 0 && !isWon(phrase, letters)){
//         console.log("Remaining life are:",life);
//         findsStr = getFindsStr(phrase, letters)
//         console.log(findsStr);
//         letter = prompt("Please choose a letter");;//Get new letter from user
//         if(!isInPhrase(phrase, letter)){
//             life--;
//         }
//         else{
//             if(!isLetterAlreadyFound(letter)){
//                 foundedLetters.push(letter);
//             }
//         }
//     }
//     if (life === 0){
//         console.log("You lost!");
//     }
//     else{
//         console.log("You won!");
//     }
// }

var getUserInput = function(){
    const stdin = process.openStdin()
    process.stdout.write('Please choose a letter: ')
    var letter = '';
    stdin.addListener('data', text => {
       letter = text.toString().trim()
      stdin.pause() // stop reading
    })
    return letter;
}

//var letter = prompt("Please choose a letter");;//Get new letter from user
var i =getUserInput();
console.log(i + 'o');