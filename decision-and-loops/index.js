// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = prompt(`Give me a number i will tell you it is odd or even`);

if(num % 2==0){
    alert(`${num} is even number`);
}else{
    alert(`${num} is odd number`)
 }
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value

let num1 = prompt(`give me a number`);
let num2 = prompt(`give me a number`);
if(Number(num1) > Number(num2)){
    alert(num1)
}else {
    alert(num2)
}



// 3. Convert the above code using`?` terniary operator

let result1=Number(num1) > Number(num2) ? alert(num1) : alert(num2);





/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName= prompt("What is your house name ");
if(houseName=="stark"){
    alert(`Winter is coming`);
}else if(houseName=="lannister"){
    alert(`A lannister always pays his debt`)
}else {
    alert(`all men must die`)
}





// 5. Convert the above code using`?` terniary operator

let result = houseName=="stark" ? alert('winter is coming') : houseName=="lannister"?alert('A lannister always pays his debt') : alert('all men must die')


// Switch

switch(true){
  case(houseName=="stark"):
  alert('winter is coming');
  break;
  case(houseName=="lannister"):
  alert("A lannister always pays his debt");
  break;
  default:
    alert("all men must die")
}


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.



let month = prompt("Name of the month pleace");

switch(true){
  case month=="january":
    alert(`${month} month has 31 days`);
    break;
  case month=="february":
    alert(`${month} month has 28 days`);
     break;
 case month=="march":
    alert(`${month} month has 31 days`);
    break;
 case month=="april":
   alert(`${month} month has 30 days`);
   break;
 case month=="may":
    alert(`${month} month has 31 days`);
    break;
 case month=="june":
    alert(`${month} month has 30 days`);
    break;
 case month=="july":
    alert(`${month} month has 31 days`);
    break;
 case month=="august":
    alert(`${month} month has 31 days`);
    break;
 case month=="september":
    alert(`${month} month has 30 days`);
    break;
 case month=="october":
    alert(`${month} month has 31 days`);
    break;
 case month=="november":
    alert(`${month} month has 30 days`);
    break;
 case month=="december":
    alert(`${month} month has 31 days`);
    break;
  default:
    alert("please spell it correctly")
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let Salary = prompt("mention your salary here");

switch(true){
  case(Salary<=20000):
    let handAmountof10 =Salary-Salary/100*10;
    alert(`After deduction of 10% tax your hand amount is ${handAmountof10}`);
    break;
  case(Salary<=40000):
    let handAmountof20 =Salary-Salary/100*20;
    alert(`After deduction of 20% tax your hand amount is ${handAmountof20}`);
    break;
  case(Salary>20000):
    let handAmountof30 =Salary-Salary/100*30;
    alert(`After deduction of 30% tax your hand amount is ${handAmountof30}`);
    break;
}



/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
//if else case
let marks=prompt("can you please give your marks");

if(marks>100){
  alert(`Marks can't be greater than 100`);
}else if(marks>80 && marks<100){
  alert(`you got Grade A`)
}else if(marks>50 && marks<80){
  alert(`you got Grade B`)
}else if(marks>30 && marks<50){
  alert(`you got Grade C`)
}else if(marks>0){
  alert(`Grade D`)
}else{
  alert(`give valid marks`)
}

//switch case

switch (true) {
  case(marks>100) :
    alert(`Marks can't be greater than 100`);
    break;
  case(marks>80 && marks<100) :
    alert(`you got Grade A`);
    break;
  case(marks>50 && marks<80) :
    alert(`you got Grade B`);
    break;
  case(marks>30 && marks<50) :
    alert(`you got Grade c`);
    break;
  case(marks>0) :
    alert(`you got Grade D`);
    break;
  default:
    alert(`give valid marks`)
    break;
}




/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather =prompt( `What is the weather like outside?`);

switch(true){
  case(weather=="sunny"):
    alert(`Please Wear a T-shirt`);
    break;
  case(weather=="rainy"):
    alert(`Please don't forget to take your raincoat `);
    break;
  case(weather=="hot"):
    alert(`Please get a hanky`);
    break;
  case(weather=="freezing"):
    alert(`Please get your sweeter on`);
    break;
  default:
    alert("Not a valid input")
}

