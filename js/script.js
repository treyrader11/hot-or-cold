$(document).ready(function() {
	

	function generateNumber(minimum, maximum) {
		return Math.floor((Math.random() * 100) + 1);
		
	}
	//var secretNumber = 0;	//global var
	var secretNumber = generateNumber(1, 100); //global var
	var count = 0; //global var
	var number = $('input#userGuess').val(); 
	var userGuess = parseInt(number);

	$('.what').click(function() {
		$(".overlay").fadeIn(1000);
	})
	$('a.close').click(function() {
		$('.overlay').fadeOut(1000);
	})


	//start new game

	$('.new').click(function() {
		//$('span#count').empty();
		//$('ul#guessList').closest('li').remove();
		//$('h2#feedback').remove();

		number = $("input#userGuess").val('');
		userGuess = parseInt(number);
		//count = 0;
		$('span#count').text(count);
		$('h2#feedback').text("Make your Guess!");
		secretNumber = generateNumber(1, 100);
		console.log("New GAME STARTED");
		console.log("the new secretNumber is " + secretNumber);
		userGuessFeedback(secretNumber, userGuess);
	})







	
 	$('input#guessButton').click(function () {
 		count += 1;
 		number = $('input#userGuess').val(); 
		userGuess = parseInt(number);
 		if (count > 0) {
 			$()
 			$("span#count").text(count) //html allows you to modify or add more markup to a section
 		}
 		$('ul#guessList').append("<li>" + userGuess + "</li>")
 		console.log("the secretNumber is " + secretNumber);
 		console.log("your guess is " + userGuess);
 		userGuessFeedback(secretNumber, userGuess);
 	})
 

	$('form').keypress(function (e) {
	 	var number = $('input#userGuess').val();
	 	var userGuess = parseInt(number);
	 	if (e.which == 13) {
			$(this).find('ul#guessList').append("<li>" + userGuess + "</li>")
	 		userGuessFeedback(secretNumber, userGuess);
	 	}
	 	//return false;
	 }) 





	 function userGuessFeedback (secretNumber, userGuess) {
		console.log("Inside the feedback function, the secretNumber is still " + secretNumber);
		console.log("Inside the feedback function, your guess is still " + userGuess);
		
		var feedback = secretNumber - userGuess; 
		
		if (feedback >= 50) {
			$('#feedback').text("Ice-Cold");
		}
		else if (feedback >= 30 && feedback <= 49) {
			$('#feedback').text("Cold");
		}
		else if (feedback >=20 && feedback <= 30) {
			$('#feedback').text("Warm");
		}
		else if (feedback >= 10 && feedback <= 20) {
			$('#feedback').text("Hot")
		}

		else if (feedback == 0) {
			$('#feedback').text("You Guessed It!")
			console.log(userGuess + " is the correct answer!")
		}
		else {
			$('#feedback').text("Very Hot");
		}
	}			

})