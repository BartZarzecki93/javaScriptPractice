let newArray = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < newArray.length; i++) //i increases after each iteration; forces the loop to break once i reaches the value of newArray.length
{
    console.log(newArray[i]); //prints the value of the element at index i each iteration
}


//standard syntax
newArray.forEach(function(index) {
    console.log(index);
});

//arrow function
newArray.forEach(index => console.log(index));



var j = 0;
var p ="";
do { 

    p += j;
    console.log(newArray[j]);
    j++;
    
  } while (j < (newArray.length));