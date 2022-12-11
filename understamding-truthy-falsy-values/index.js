// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/
let num1 = 22;
let num2 = 33;


/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
const language = "JavaScript";
alert(`I am learning ${language}`);
alert(`The value of num1 is ${num1} and the value of num2 is ${num2}`);
alert(`The sum of ${num1} and ${num2} is ${num1+num2}`)


/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it a variable names `userName`
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/

let userName = prompt(`what is you name ?`);
let userProfession = prompt(`what is your profession ?`);
let isAdult = confirm(`are you adult ?`);

alert(`I am ${userName} a ${userProfession}`);
console.log(`I am ${userName} a ${userProfession}`);
alert(`Username: ${userName}
Adult: ${isAdult}
profession : ${userProfession}`);
console.log(`Username: ${userName}
Adult: ${isAdult}
profession : ${userProfession}`);


/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/

let numA = prompt(`give me first number`);
let numB = prompt(`give me second number`);
alert(`sum of both numbers is equal to ${Number(numA)+Number(numB)}`);
alert(`substraction of both numbers is equal to ${numA-numB}`);
alert(`Multipication of both numbers is equal to ${numA*numB}`);
console.log(`substraction of both numbers is equal to ${numA-numB}`);
console.log(`Multipication of both numbers is equal to ${numA*numB}`);