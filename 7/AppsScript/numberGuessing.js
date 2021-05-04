function numberGuessing() {
	var min = 1; 
	var max = 10; 
	var x = parseInt(Math.round((Math.random() * (max - min)) + min)); 
	
	var spreadsheet = SpreadsheetApp.getActive();

	Logger.log('Generated random number %s', x);
	 
	for(var i = 3;i>0;i--) { 
	  var ui = SpreadsheetApp.getUi();
	  var response = ui.prompt("Guess the number I am thinking about! You have " + i + " guesses left.");
	  var userNumber = parseInt(response.getResponseText());
      
	  if (userNumber == x) { 
		SpreadsheetApp.getUi().alert('Yes! Thats the one!'); 
		break; 
	  } else { 
		SpreadsheetApp.getUi().alert("Nope!"); 
		
		spreadsheet.getRange('A' + i).activate();
		spreadsheet.getCurrentCell().setValue('Wrong guessing: ' + userNumber);
	  } 
	} 
	
	SpreadsheetApp.getUi().alert('Good bye!');
  }