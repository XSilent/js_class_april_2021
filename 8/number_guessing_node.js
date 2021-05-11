// NodeJS example of Number Guessing Game
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var min = 1; 
var max = 10; 
var x = Math.round((Math.random() * (max - min)) + min); 
var tries = 3;

function userFeedback(userNumber) {
  if (userNumber == x) { 
    console.log("Yes! Thats the one!"); 
    return true;
  } else { 
    console.log("Nope. Guess again!");
    return false;
  } 
}

function userGetInput() {
  readline.question('Guess the number I am thinking about: ', (userNumber) => {
  
    var result = userFeedback(userNumber);
    tries--;
    if ((result == false) && (tries > 0)) {    
      userGetInput();
    } else {
      console.log('Good bye!');
      readline.close()
    }
  });
}

userGetInput();



