var min = 1; 
var max = 10; 
var x = Math.round((Math.random() * (max - min)) + min); 

for(var i = 3;i>0;i--) { 
	var userNumber = prompt("Guess the number I am thinking  
                    about! You have " + i + " guesses left."); 
	if (userNumber == x) { 
		alert("Yes! Thats the one!"); 
		break; 
	} else { 
		alert("Nope!"); 
	} 
} 

alert('Good bye!');
