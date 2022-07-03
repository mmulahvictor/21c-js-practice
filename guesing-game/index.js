//program data:
let number = Math.floor(Math.random() * 100);
let guess;
let limit = 5;
let won = false;
let guesses = [];

for(i = 0; i < limit; i++){
//prompt user for their guess
do{
guess = parseInt(prompt("Guess a number"));
}while(isNaN(guess) || isPreviousGuess(guess));
//if user guess is correct, congratulate them

if (guess == number) {
    document.write("<h1>Correct! You won!</h1>");
    won = true;
    break;
}

//if user guess is incorrect, let them know
else {
    guesses[i] = guess;
    alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
}
}

//if user runs out of guesses, let them know the correct answer
if (!won) {
    document.write("<h3>Sorry, you lost. The correct answer was " + number + ".</h3>");
}

//prevent duplicate guesses
function isPreviousGuess(){
    for(var i = 1; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}