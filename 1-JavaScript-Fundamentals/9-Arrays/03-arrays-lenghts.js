var listOfHotPeppersEatenByContestants = [3, 4, 2, 10, 3, 5];

//Prints out the length of the array
console.log(listOfHotPeppersEatenByContestants.length); //6


listOfHotPeppersEatenByContestants[listOfHotPeppersEatenByContestants.length] = 12; //[3, 4, 2, 10, 3, 5, 12]
//You can append the array like this:
console.log(listOfHotPeppersEatenByContestants.length); //7


//PUSH is easier though
listOfHotPeppersEatenByContestants.push(21); //[3, 4, 2, 10, 3, 5, 12, 21]
console.log("7 is now the last spot: " + listOfHotPeppersEatenByContestants[7]);

console.log(listOfHotPeppersEatenByContestants.length); //8

//Removing an element from the array
listOfHotPeppersEatenByContestants.pop(); //[3, 4, 2, 10, 3, 5, 12]
console.log(listOfHotPeppersEatenByContestants.length); //7

for (x=0; x<7; x++)
{
console.log(listOfHotPeppersEatenByContestants[x]);


}