
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	

})


//my code below

/*
function newGame(ranNum) {
	console.log(ranNum);
	$('form').keydown(function (e) {
		if (e.which == 13) {
			var userGuess = $('#userGuess').val();
			var newUserGuess = "<li class='selected'>" + userGuess + "</li>";
			$('#guessList').append(newUserGuess);
			$('#userGuess').val('').focus();    
        	function feedback(userGuess) {
				if (newUserGuess == ranNum) {
					alert("hg");
				}	
			}
        	return false;

		}
	})
}
*/




// every time #guessButton is clicked, the number of guesses are displayed in span#count
 //spend much time researching this one		
 		var count = 0;
 		function submitBtn () {
 			var userNum = $('#userGuess').val();
 			var userGuess = parseInt(userNum);
 			count += 1;
 			if (count > 0) {
 				$('#count').html(" ")
 			}
 			//console.log(userGuess)
 			//console.log(secretNum())
 			userGuessFeedback(randomNum(), userGuess)
 		} //End click 

 // Get secret number to start guessing game (onClick() on button)
function randomNum(min, max) {
	return Math.floor((Math.random() * 100) + 1);
}

//console.log(secretNum(1, 100));



//  start new game
function newGame() {
	$('#count').empty();
	$('#guessList').closest('li').remove();
	$('#feedback').remove()
}


// user guesses are first checked to be a valid number, then when user keypresses the enter key /NEED:(CLICK #guessbutton), then the user's guess is appended to ul#guessList)
 $('form').keypress(function (e) {
 	var userNum = $('#userGuess').val();
 	var userGuess = parseInt(userNum);
 	
 	
 	if (e.which == 13) {

 		$(this).find('#guessList').append("<li>" + userGuess + "</li>")
		//userGuessFeedback(secretNumb, userGuess);
 	}
 	//event.preventDefault();
 	//return false;
 })



 //providing user feedback  NEED: document.write into div#feedback)
function userGuessFeedback (randomNum, userGuess) {
	console.log(randomNum);
	console.log(userGuess);
	var feedback = randomNum - userGuess;
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
		$('#feedback').text("Hot");
	}

	else if (feedback == 0) {
		$('#feedback').text("You Guessed It!")
	}
	else {
		$('#feedback').text("Very Hot");
	}
}







