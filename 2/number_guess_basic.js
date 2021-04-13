var min = 1; 
var max = 10; 
var x = Math.round((Math.random() * (max - min)) + min); 
var userGuessed = false; 

while(userGuessed == false) { 
	var userNumber = prompt("Guess the number I am thinking about!"); 
	if (userNumber == x) { 
    alert("Yes! Thats the one!"); 
    userGuessed = true; 
  } else { 
    alert("Nope. Guess again!");
  } 
}

alert('Good bye!');
