//code check if the person with age under 55 and disability level lower than 7 is in open category if not its a senior
var data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9], [90, -2]];

console.log(data.length); //6

console.log(data);
console.log(data[1]);
console.log("---------------------");

console.log(data[1][0]);
console.log("---------------------");

// age >55
// handicap >7  (-2 to 26)

for (i = 0; i < data.length; i++) {
  if (data[i][0] < 55 && data[i][1] >= 7) {
    console.log("Open");
  } else if (data[i][0] <= 55 && data[i][1] < 7) {
    console.log("Open");
  } else if (data[i][0] > 55 && data[i][1] < 7) {
    console.log("Open");
  } else if (data[i][0] > 55 && data[i][1] > 7) {
    console.log("Senior");
  } else {
    console.log("Senior");
  }
}

console.log("---------------------");
