//do while loops

var i = 0; 
do /* do */ {
  i += 1; /* statement */
  console.log(i);
} while (i < 5); /* while (condition) */

// Practice

var text = "";
var j = 0;

do { 
  text += "The number is: " + j;
  j++;
  console.log(text);
} while (j < 10); // "The number is: 0", "The number is: 1", ... "The number is: 10"