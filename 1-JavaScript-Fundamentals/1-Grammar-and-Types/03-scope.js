//Global scope
var x = 12
{
    //local scope
    var y = 12;
}

var outside = "outside";

{

    let inside = "inside";
}

console.log (outside);
//cannot print since its local variable
console.log(inside);