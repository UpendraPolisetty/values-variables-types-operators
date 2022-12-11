function pow(x , n) {
  let result = 1;
  for (let i = 0; i < n; i++) { 
    result *= x;
 }
  return result;
}

let x = prompt (" x? ", '');
let n = prompt(" n? ", '');
if ( n <= 0 )
{
  alert (`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}


//Comparison:-------------------

"hello world" === "hello world"; // true

"hello world" == "hello world"; // true

true === true; //true

77 == "77";//true

77 === "77";//false

"cat" === "dog";//true

false === 0;// false

false == 0;// true

0 == "";//true

"" == false;//true

null == null;//true

undefined == undefined;//true

null == undefined;//true

null == 0;// false

null == 21;// false

null == "null";//false

undefined == "undefined";//false

undefined == 0;//false

undefined == false;//false

undefined == "false";// false

NaN == null;//false

NaN == "NaN";//false

NaN == 0;//false

NaN == false;// false

NaN == undefined;// false

NaN == NaN;// false

2 > 1;//true

2 != 1;// true

"Z" > "A";// true

"Hello World" > "Super Mario";// false

"Hello World" != "Super Mario";// true

NaN !== NaN;// true

NaN != NaN;// true

NaN != undefined;// true

undefined != null;// false

undefined != "Hello";// true

undefined != "undefined";// true

//Logical operator :-----------------------------

20 > 5 && 5 < 20; // true
20 > 5 && 20 < 5;// false
NaN && NaN;// NaN
NaN && undefined;// NaN
undefined && " ";// undefined
"" && "Arya";// ""
"Arya" && 5;// 5
10 && "Arya";// arya
" " && 10;//""
NaN && undefined;// NaN
" " || 10;//10
undefined || " ";//""
10 || "Arya";//10
"" || "Arya";//Arya
!undefined;// true
!null;// true
!20;// false
!0;// true
!NaN;//true