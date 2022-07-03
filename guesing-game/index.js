//program data:
let number = 4
let guess;

//prompt user for their guess
guess = prompt("Guess a number");
//if user guess is correct, congratulate them
if (guess == number) {
    document.write("<h1>Correct! You won!</h1>");
}
//if user guess is incorrect, let them know
else {
    alert("incorrect");
}
