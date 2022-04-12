// Getting the guess field
guessField = document.querySelector('#guessField');
guessField.addEventListener('click', clearDefault);

// Getting the submit button
submitGuessBtn = document.querySelector('#submitGuess');
submitGuessBtn.addEventListener('click', submitGuess);

// Submit Guess Form
guessForm = document.querySelector('startGame');

// Getting field for displaying feedback as to the user's guess
computerResponse = document.querySelector('#guessQuestion');

// Getting another form to allow a user to restart the game. 
restartForm = document.querySelector('.restartForm');

// Getting button to end the game
noButton = document.querySelector('#nope');
noButton.addEventListener('click', finishGame)

function gameSetup(){
    randomNumber = getRandomInt(1, 11); 
    console.log(randomNumber);
    computerResponse.InnerHTML = 'Guess a number between 1-10';
    guessField.value= 'Enter Your Guess'; 
}

function clearDefault(e){
    targetField = e.currentTarget;
    targetField.value = '';
}

function submitGuess(e){
    
    e.preventDefault();
    userGuess = Number(guessField.value);

    // Creates an array of the possible accepted answers a user can input

    let acceptedAnswers = [];
    for (var number=1; number<=10; number++) {acceptedAnswers.push(number)}

    // Checks that user submitted a valid guess, then either executes or throws an error.

    if(acceptedAnswers.includes(userGuess)){
        guessCheck();
    } else {
        computerResponse.InnerHTML = 'Please input an integer between 1-10';
    }

} 

function guessCheck(){
    if(userGuess > randomNumber){
        computerResponse.innerHTML = `Your guess, ${userGuess}, was too high, try again`;;
    } else if (userGuess < randomNumber) {
        computerResponse.innerHTML = `Your guess, ${userGuess}, was too low, try again`;
    } else if (userGuess === randomNumber){
        computerResponse.innerHTML = "That's right! Nice job!";
        restartForm.style.display = 'block';
        submitGuessBtn.style.display = 'none';
        guessField.setAttribute('style', 'border-color:green;');
        guessField.setAttribute('disabled', 'true');
    }
}

function finishGame(e){
    e.preventDefault();
    computerResponse.innerHTML = 'Thanks for playing!';
    restartForm.style.display = 'none';
    guessField.style.display = 'none';
}

// This is stupid, I wish this was a little better. Seems there isn't a built in way for Math to do this. 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

// Running this to create the inital setup of the game. I actually probably should cut this since I can use the default functionality of the form submit to reset the program.
gameSetup();