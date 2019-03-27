function addThree(a, b, c){
    return a + b + c;
}

console.log(addThree(1,2,3));
console.log(addThree(4,5,6));

console.log(addThree(1,2,3,4));   //number 4 is thrown away 

console.log(addThree(1,2));   //argument hasnot been provided 


//calling arguments or indivual elemtn from object

function demoFunction(x, y) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

demoFunction(1, 2); 

//The most important takeaways here are this:
//Know the difference between a parameter and an argument.
//Know about the arguments object found inside of functions.