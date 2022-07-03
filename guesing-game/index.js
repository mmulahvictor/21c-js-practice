//program data:
let number = 4
let guess;
let guesses = 5;

for(i = 0; i < guesses; i++){
//prompt user for their guess
guess = prompt("Guess a number");
//if user guess is correct, congratulate them
if (guess == number) {
    document.write("<h1>Correct! You won!</h1>");
    break;
}
//if user guess is incorrect, let them know
else {
    alert("incorrect. \nYou have " + (guesses - i) + " guesses left.");
}
}
