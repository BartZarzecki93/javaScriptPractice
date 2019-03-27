let x1 = "This is a string.";
let y = 'This is also a string.';
console.log("This is printing a string to the console.");


let a = "StringA"
let b = "StringB"
console.log(a + b) //"StringAStringB"
console.log("Hello " + b) //"Hello StringB"
console.log(a + 'text' + b) //"StringAtextStringB"


let x = "Hello World!"
//console.log(x(0));

console.log("'Mary's father said "+"I don't want you to work there!");
console.log('Mary\'s father said "I don\'t want you to work there!"');

let st1 = 'Bart';
let st2 = 'Dick';

console.log( st1 + st2);

let st3 = 'STRINGS ARE COOL';
console.log(st3[1]);

function vowel(str1)
{

    var vowel_list ='STRINGS ARE COOL';
    var count = 0;

    for (var x=0; x<str1.length; x++)
    {
if(vowel_list.indexOf(str1[x]) !==-1)
{
    count +=1;
}

    }
    return count;

}
console.log(vowel("the quick brown fox"));