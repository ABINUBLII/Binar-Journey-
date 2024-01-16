// *Variables*
// Create a variable and console log the value
let variable = "x";
console.log(variable);
// Create a variable, add 10 to it, and alert the value
let var1 = 10;
console.log(var1);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let hasil;

function subs4numbs(n1, n2, n3, n4) {
  hasil = n1 + n2 + n3 + n4;

  return hasil;
}

console.log(subs4numbs(1, 1, 1, 1));
// Create a function that divides one number by another and returns the remainder
let hasil2;

function divNumb(n1, n2) {
  hasil2 = n1 / n2;

  return hasil2;
}
console.log(divNumb(10, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let resultAddTwoNumb;
let alert;

function addTwoG(numb, numb1) {
  resultAddTwoNumb = numb + numb1;

  if (resultAddTwoNumb > 50) {
    alert = "jumaji";
  } else {
    alert = "no command at all";
  }
  return alert;
}

console.log(addTwoG(20, 50));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
