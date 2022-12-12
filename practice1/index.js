//Logical AND operation
true && true; // true
true && false; //false
false && true;// false
false && false;// false
"foo" && "bar";// bar
"bar" && "foo";// foo
"foo" && "";// ""
"" && "foo";// ""
" " && "John" && "" && false;//""
false && "Hey" && undefined;//false
"undefined" && false && 42;//false

//Logical OR operation
true || true;// true
true || false;//true
false || true;//true
false || false;//false
"foo" || "bar";//foo
"bar" || "foo";//bar
"foo" || "";//foo
"" || "foo";//foo
" " || "John" || "" || false;//" "
false || "Hey" || undefined;//hey
"undefined" || false || 42;//undefined


// Write the output of the code next to each line:
let a = 5,
  b = 10;
(a != b) && (a < b); // true

(a > b) || (a == b); // false

(a < b) || (a == b); // true

!(a < b); //false

!(a > b); //true

!!a; // true

!!(a>b); // false


//Expression and Statement
//Write expression and statement next to each line of code:

21 // expression
100 + 200 + 79884 + 900; // expression
200 ** 2 ; // expression
!21 ; // expression
var num = 21; //Statement
if(true){}; //Statement
true ? true : false; // expression
for(let i = 0; i < 10; i++){} ; //Statement
while(true){} // don't try it in the browser it's an infinite loop
let user = "Arya"; //Statement
12 % 5 ; // expression
a = 10;; // expression

//Write valid and invalid with reason next to each line of code given below:

let age = 21;// valid
let number = 21 + 21 + 100 + 200 + 900;// valid
let num = var number;// invalid
let user = "Arya" + "Stark";// valid
let isAdult = if(10 > 5){};//invalid
let isAdult = 10 > 5 ? true : false;// valid
let forLoop = for(let i = 0; i < 10; i++){};
let message = alert("Hello World");// valid
+10;// valid
var age = 21;// valid
var
age
=
21;// valid