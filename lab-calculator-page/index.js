//user input
let name = prompt("what is your name?");
let num1 = prompt("what is your first number?");
let num2 = prompt("what is your second number?");

//output
document.write(`<h1>Welcome to Number Fun, ${name}</h1>`);
document.write(`<p>Operant#1: ${num1} Operant#2: ${num2}</span></p>`);

//calculations
//additon
document.write(`<p>The sum of <span>${num1} and ${num2} is ${parseInt(num1) + parseInt(num2)}</span></p>`);

//subtraction
document.write(`<p>The difference of <span>${num1} and ${num2} is ${parseInt(num1) - parseInt(num2)}</span></p>`);

//multiplication
document.write(`<p>The product of <span>${num1} and ${num2} is ${parseInt(num1) * parseInt(num2)}</span></p>`);

//divition
document.write(`<p>The quotient of <span>${num1} and ${num2} is ${parseInt(num1) / parseInt(num2)}</span></p>`);

//modulus
document.write(`<p>The result of the mod operation on ${num1} and ${num2} is <span>${parseInt(num1) % parseInt(num2)}</span></p>`);
