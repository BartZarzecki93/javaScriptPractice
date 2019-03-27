var sayHello = function(){
    console.log("Hello");
}

var sayHowdy = function howdy(){
    console.log("Howdy");
}

//Printing the value
console.log(sayHowdy());

//The call cannot be called before the function- this would cause an error
var saysay = function say(){
    console.log("say say");
}

//Printing the value
console.log(saysay());