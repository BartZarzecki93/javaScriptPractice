function addTwoNumbers(a, b){
    console.log(a + b);
    return a + b;
}

//The return statement ends
// function execution and specifies a value to be returned to the function caller.

addTwoNumbers(5, 7);
addTwoNumbers(5, 6);

//Function declarations will be hoisted in JavaScript.
// This means that the call can come before the function is declared.

//The call
fooFunction(); 

//The declaration
function fooFunction() {
  console.log('foo');
}


function subTwoNumbers(a, b){
    console.log(b-a);
    return b-a;
}

subTwoNumbers(11,5);

function addTwoNames(a, b){
    console.log(a + b);
    return a + b;
}

addTwoNames("Bart","Romano")

function showTime(a){
    console.log("you have left "+a+" of the show" );
    return a ;
}

showTime(5);