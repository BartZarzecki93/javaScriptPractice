// for in loops

//for (var i /*variable section*/ in obj /*object section*/) {
//    console.log(i) /*statement*/
 // }
  
  //Write a for in loop that capitalizes the first letter of studentName
  
  var studentName = 'paul';
  var capSN = '';
  for (var n in studentName) {
    if (n == 1) {
          capSN = studentName[n].toUpperCase();
      } else {
          capSN += studentName[n];
      }
  }
  console.log(capSN);