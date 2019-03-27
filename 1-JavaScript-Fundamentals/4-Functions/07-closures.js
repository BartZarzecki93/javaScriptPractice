function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
var a = addSquares(2, 3); // returns 13
var b = addSquares(3, 4); // returns 25
var c = addSquares(4, 5); // returns 41

function printName(first, last){
    var intro = "My name is ";

    function makeFull(){
        return intro + first + " " + last;
    }
    return makeFull();
}

var d = printName("Paul", "O'Connor");
console.log(d);







var calculateTotalWithTip = function (totalWithoutTip, tipPercentage) {
    let totalWithTip;
    function calculateTip(totalWithoutTip, tipPercentage) {
        let tipAmount = totalWithoutTip * tipPercentage;
        return tipAmount;
    }
    totalWithTip = calculateTip(totalWithoutTip, tipPercentage) + totalWithoutTip;
    return totalWithTip;
}

var tipAmount = calculateTotalWithTip(100, .20);
console.log(tipAmount);