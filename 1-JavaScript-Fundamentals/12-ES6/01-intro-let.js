//let lesson

var someNum = 10;
let someOtherNum = 5;

//conditionals and for loop
//------------------------------------------------------------------

//var
var x = 8;
if(x === 8){
    var y = 7;
}
console.log("Var:", y);
//-----------

for (var ii = 0; ii < 2; ii++) {
    console.log(ii)
    // <- 0
    // <- 1
    }
    //This will work.
    console.log("Outside with var:", ii)

    for (let i = 0; i < 2; i++) {
        console.log(i)
        // <- 0
        // <- 1
      }
      //This won't work:
    console.log("Outside with let:", i); ///no go beacuse it in the statement

let xyz = 8;
if(xyz === 8){
    let yy = 7;
}
console.log("Let:", yy); //its not gonna read



//-------------------------------------------------------------------
///block scoping version

{{ var twoLevelsIn = 'Two levels in'; }}
console.log(twoLevelsIn) // <- Two levels in

{
    var demo = 1;
}
//1 will show
console.log("Var demo:", demo);

{
    let demoTwo = 5;
}
//2 will not show the output, it is not going that deep in the scope
console.log("Let demo:", demoTwo);

{{ let twoLevelsInWithLet = 'Two levels in'; }}
console.log(twoLevelsInWithLet) // <- Break, will not show either
//------------------------------------------------------------------