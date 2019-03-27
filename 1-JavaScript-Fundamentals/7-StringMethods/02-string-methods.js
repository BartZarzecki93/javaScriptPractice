var a = 'I am Bart';

console.log(a.length);

console.log(a.slice(1));



var c ="EFA JS March 2018";
var d ="";


for(x=0; x<8; x++)
{
d= c.split("");


console.log(d[x]);
};

console.log(c);

var t = c.slice(0,8);
console.log(t);
var u = c.slice(8,17);
console.log(u);


var txt2 = c.slice(0, 3) + " Hello World " + c.slice(3);
console.log (txt2);


var myName = 'bartosz Zarzecki';

console.log(myName.toUpperCase());

var p = myName.slice(0,1);
var i =p.toUpperCase();

console.log(i);

var myNewName = i+myName.slice(1,16);

console.log(myNewName);