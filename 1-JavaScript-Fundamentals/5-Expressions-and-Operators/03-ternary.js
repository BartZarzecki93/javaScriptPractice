//Conditional statements
let x =4;

if (x == 0) {
    console.log("hello");
} 
else if (x < 0) 
{
    console.log("hi");
} 
else if (x>0)
{
    console.log("goodbye");
}

//Ternary operators

console.log((x == 0) ? "hello" : (x < 0) ? "hi" : "goodbye");

let z = 23;


if (z >50)
{
console.log("You can rent a car");

}
if (21<=z && z<=25)
{
console.log("you can drink");
}

console.log((z>50) ? "You can rent a car" :(21<z<25)?"you can drive":"nothgin");