// Condition
// Write your code below each problems:

/*>
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

// soultion :

let age = prompt ( "Enter your age here" );
if ( age>=12 && age<=55 ) {
    alert ( "you can participate in the marthon" )
} else if ( age>=4 && age<=11 ) { 
    alert ( "your too young to participate in the marathon" );
} else if ( age<4 ) {
    alert ( "Hey kiddo! can you walk ?" );
} else if ( age>55 ) {
    alert ( "you are too old to participate in the marathon" )
}


// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

const n = +prompt("Enter number of e's ");
const start = "H";
const end ="llo";

let value =" ";
for ( i=0; i < n; i++)  {
    value += "e";
}
alert(start+value+end);


/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter 
n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let maxValue = +prompt("Enter a number here");
let sum=0;

for(i=0;i<=maxValue;i++){
    sum += i;
}

alert(`the value of sum is ${sum}`)



/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let number = +prompt("give a numbe between 1 to 10");

switch(number){
    case 1:
    alert("ONE");
    break;
    case 2:
    alert("TWO");
    break;
    case 3:
    alert("THREE");
    break;
    case 4:
    alert("FOUR");
    break;
    case 5:
    alert("FIVE");
    break;
    case 6:
    alert("SIX");
    break;
    case 7:
    alert("SEVEN");
    break;
    case 8:
    alert("EIGHT");
    break;
    case 9:
    alert("NINE");
    break;
    case 10:
    alert("TEN");
    break;
    default:
        alert(`Try again`)
}



/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = Number(prompt(`Enter your marks here`));
console.log(marks);

switch (true){
    case (marks>90) :
        alert('AA');
        break;
    case (marks>80 && marks<=90) :
        alert('AB');
        break;
    case (marks>70 && marks<=80) :
        alert('BB');
        break;
    case (marks>60 && marks<=70) :
        alert('BC');
        break;
    case (marks>50 && marks<=60) :
        alert('CC');
        break;
    case (marks>40 && marks<=50) :
        alert('CD');
        break;
    case (marks>30 && marks<=40) :
        alert('DD');
        break;
    case (marks<=30) :
        alert('FF');
        break;
    default:
        alert('give valid marks');
        break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let interger1 =+prompt("Enter Integer one");
let interger2 =+prompt("Enter Integer two");

if(interger1>interger2){
    alert(interger1);
}else{
    alert(interger2)
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. 
Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");

const product = num1*num2*num3;

if(product>0){
    alert("Product is positive");
} else{
    alert("Product is negative");
}





/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement.
  Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two.
   If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let num1 = +prompt("Enter First value");
let num2 = +prompt("Enter second value");

const operation =prompt("Enter a operation out of (add,sub,mul,Div)")

const addition = num1+num2;
const substraction =num1-num2;
const multiplication=num1*num2;
const divison =num1/num2;

if (num1>num2){
    switch(operation){
        case"add":
            alert(`addition of both number is ${addition}`);
            break;
        case"sub":
           alert(`substraction of both number is ${substraction}`);
           break;
        case"mul":
           alert(`multiplication of both number is ${multiplication}`);
           break;
        case"Div":
           alert(`divison of both number is ${divison}`);
           break;
    }
}else if(num1<num2){
    alert(`Number Two is larger then Number one`);
}else {
    alert(`invalid input`);
}
























