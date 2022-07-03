//program data:
let number = 4
let guess;
let guesses = 5;
let won = false;

for(i = 0; i < guesses; i++){
//prompt user for their guess
guess = prompt("Guess a number");
//if user guess is correct, congratulate them

if (guess == number) {
    document.write("<h1>Correct! You won!</h1>");
    won = true;
    break;
}

//if user guess is incorrect, let them know
else {
    alert("incorrect. \nYou have " + (guesses - i) + " guesses left.");
}
}
//if user runs out of guesses, let them know the correct answer
if (!won) {
    document.write("<h1>Sorry, you lost. The correct answer was " + number + ".</h1>");
}
