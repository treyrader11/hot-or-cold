'use strict'


$(document).ready(function() {
	

	var newGameButton = $('.new');
	var count = $('#count');
	var feedbackHeader = $('#feedback');
	var userInput = $('#userGuess');
	var guessButton = $('#guessButton');
	var listOfGuesses = $('#guessList');
	var guessCount = 0;
	var userWinModal = $('#winningModal');
	//following var contains an invoked function that is called when the page loads
	var secretNumber = generateNumber(1,100);

	console.log("The secretNumber is currently " + secretNumber);      
	
	newGameButton.click(newGame);
	guessButton.click(inputNumber);
	userInput.keypress(function(event) {
    	var keycode = event.which;                       //var keycode = (event.keyCode ? event.keyCode : event.which)
    	if (keycode == 13) {
    		inputNumber();
    	}
    });

 
	function generateNumber(min, max) {
		return Math.floor((Math.random() * max) + min); 
		//'max' is the highest number, min is the lowest it can be
	};

// A new game will start when clicking .new and will reset span#count, #userGuess, #feedback, and removing .newGuess. A secret number between 1 and 100 will be generated.
//this function also controls the winning modal's newButton.
	function newGame() {
		console.log('***NEW GAME STARTED***');
		//count resets to zero	
		guessCount = 0;
		//the count will reflect as zero
		count.text(guessCount);
		//the input gets empty
		userInput.val('');
		//the feedbackHeaderwill reflect text
		feedbackHeader.text("Make your Guess!");
		// class will be removed from feedbackHeader
		feedbackHeader.removeClass();
		// all li's with .newGuess will be removed
		$('.newGuess').remove();
		// The function generateNumber will be called and will be put in a secretNumber variable
		secretNumber = generateNumber(1,100);
		console.log("the new secretNumber is " + secretNumber);
	   };

	  //feedback will reflect in the feedbackHeader to inform user of how hot/cold the user is from the secretNumber.
	function inputNumber() {
		var number = userInput.val(); //first time declaring variables so include 'var'
		var userGuess = parseInt(number);
		console.log("your number is " + userGuess);
		console.log("the secret number is " + secretNumber);
		if (userGuess >= 1 && userGuess <= 100) {
			increaseCount();
			generateFeedback(secretNumber, userGuess);
			userInput.val('').focus();
			//binding the input value to "focus()" allows for the input to gain focus right after inserting the button!
		}
		else {
			alert("Insert a number between 1-100.")
			userInput.val('').focus();
		}
	};

	//Everytime you make a guess this function is called, which increments by one
	function increaseCount() {
		guessCount++;
		count.text(guessCount);
	};	

	//this function deals with calculating the quantitative distances between the random number and user's guess
	function generateFeedback(secretNumber, userGuess) {
		var userFeedback = secretNumber - userGuess;
		console.log("***Your number is still " + userGuess + "***");
		console.log("***The secretNumber is still " + secretNumber + "***");
		if (userFeedback === 0) {
		 	feedbackHeader.text("The Secret Number is " + secretNumber + "!");
		 	listOfGuesses.append('<li class="secret newGuess">' + userGuess + '</li>');
		 	userWinModal.fadeIn(1000);
		 	newGameButton.click(function() {
		 		userWinModal.fadeOut(1000);
		 	});
		 	//userWon(); <--located at very bottom of page; needs much work
		}
		else if (userFeedback <= 9 && userFeedback >= -9) {
		 	//between -9 to 9
		 	feedbackHeader.text("Very Hot");
		 	listOfGuesses.append('<li class="very-hot newGuess">' + userGuess + '</li>');
		}
		else if (userFeedback >= 10 && userFeedback <= 20 || userFeedback <= -10 &&  userFeedback >= -20)  {
		 	// between 10 and 20 or between -10 and -20
		 	feedbackHeader.text("Hot");
		 	listOfGuesses.append('<li class="hot newGuess">' + userGuess + '</li>');
		 	feedbackHeader.removeClass();
		 	}
		else if (userFeedback >= 21 && userFeedback <= 30 || userFeedback <= -21 && userFeedback >= -30) { 
		 	//between 21 and 30 or between -21 and -30
		 	feedbackHeader.text("Warm");
		 	listOfGuesses.append('<li class="warm newGuess">' + userGuess + '</li>');
		 	feedbackHeader.removeClass();
		}
		else if (userFeedback >= 31 && userFeedback <= 49 || userFeedback <= -31 && userFeedback >= -49) {
			// between 31 and 49 or between -31 and -49
			feedbackHeader.text("Cold");
			listOfGuesses.append('<li class="cold newGuess">' + userGuess + '</li>');
			feedbackHeader.removeClass();
		}
		else {
			// 50/-50 or further away
			feedbackHeader.text("Ice-Cold");
			listOfGuesses.append('<li class="ice-cold newGuess">' + userGuess + '</li>');
		}

	};

	$('.what').click(function() {
		$(".overlay").fadeIn(1000);
	})
	$('a.close').click(function() {
		$('.overlay').fadeOut(1000);
	})


		
		




	//extraneous function below for experimentation. 

	/*function userWon() {
		 $(document).keypress(function(event) {
    		var keycode = event.which;                       //var keycode = (event.keyCode ? event.keyCode : event.which)
    		if (keycode == 13) {
    			userWinModal.fadeOut(1000);
    			newGame();
    		}
    	});
	};
*/

})
 
