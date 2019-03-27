let x = true;
console.log(x); //true


let y = null;
console.log(y); //null = no value;

let z;
console.log(z); //undefined - no value assigned

let c = 17;
console.log(c); //17

let q = 'Hello World!';
console.log(q); //Hello World!


const MY_KEY = Symbol();
const obj = {
    [MY_KEY]: 123
};

let u = {
    hello: 'test',
    number: 13
};
console.log(u.hello); //'test'
console.log(u.number); //13


let t = 19;
console.log(t); //x
t = 'tree';
console.log(t); //'tree'
t = false;
console.log(t); //false

var g = "me";

console.log(typeof g)