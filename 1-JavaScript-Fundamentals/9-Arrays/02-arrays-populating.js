let newArray = ["green", "blue", "yellow"];
newArray.push("purple"); //['green', 'blue', 'yellow', 'purple']
newArray.pop("purple"); //['green', 'blue', 'yellow']

newArray.unshift("red"); //['red', 'green', 'blue', yellow']
newArray.shift("red"); //['green', 'blue', 'yellow']

newArray[1] = "white"; //['green', 'white', 'yellow']

let ar = ["lol", "lolo", "lolol", "lololo"];
let ar1 = ["lol1", "lolo1", "lolol1", "lololo1"];

ar.push(ar1[1]);
console.log(ar);

