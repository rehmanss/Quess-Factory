/*
 Note this code is adapted from MDN "A first splash into JavaScript"
 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash
*/
window.addEventListener("load", function(){
 
    // HTML elements we work with
    var guesses = document.querySelector('#guesses'),
        feedback = document.querySelector('#feedback'),
        btnGuess = document.querySelector('#btnGuess'),
        txtGuess = document.querySelector('#txtGuess'),
        btnReset;
    
// Below function triggers the enter button and can be changed to preffer button
    
    var input = document.getElementById("txtGuess");
            input.addEventListener("keyup", function(event) {
                event.preventDefault();
                    if (event.keyCode === 13) {
                        document.getElementById("btnGuess").click();
                        }
                        });
    

    
    // secret number and number of guesses   
    var number = Math.floor(Math.random() * 100) + 1,
        count = 1;
    
    
    // get ready for interation
    txtGuess.focus();
    btnGuess.addEventListener('click', checkGuess);
    
    
    // check a guessed number and display feedback
    function checkGuess() {
        
        var guess = parseInt(txtGuess.value);
        
        if(count === 1) {
            guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent += guess + ' ';
        
        if(guess === number) {
            feedback.textContent = 'You got it right - CONGRATULATIONS! You got it in ' + count + " times";
            feedback.style.backgroundColor = 'green';
            setGameOver();
        } else if(count === 10) {
            feedback.textContent = 'You had 10 wrong guesses - GAME OVER! The number was ' + number;
            setGameOver();
        } else {
            feedback.textContent = 'Wrong - ';
            feedback.style.backgroundColor = 'orangered';
            if(guess < number) {
                feedback.textContent += 'Last guess was too low!';
            } else if(guess > number) {
                feedback.textContent += 'Last guess was too high!';
            }
        }
        count++;
        txtGuess.value = '';
        txtGuess.focus();
    }

    
    // end current game and offer to start a new game
    function setGameOver() {

        txtGuess.disabled = true;
        btnGuess.disabled = true;
        
        btnReset = document.createElement('button');
        btnReset.textContent = 'Start new game';
        document.body.appendChild(btnReset);
        
        btnReset.addEventListener('click', resetGame);
    }
    
    // set up a new game
    function resetGame() {
        
        var paras = document.querySelectorAll('#result p');
        for(var i = 0 ; i < paras.length ; i++) {
            paras[i].textContent = '';
        }

        feedback.style.backgroundColor = '';
        
        btnReset.parentNode.removeChild(btnReset);
        
        txtGuess.disabled = false;
        btnGuess.disabled = false;
        txtGuess.value = '';
        txtGuess.focus();
        
        number = Math.floor(Math.random() * 100) + 1;
        count = 1;        
    }
});

