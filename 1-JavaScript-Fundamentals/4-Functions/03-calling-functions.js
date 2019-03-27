//1
function getSquare(number){
    return number * number;
   }
   //2
   console.log(getSquare(5));


   console.log(addNumbers(5,7));
/* ... */
function addNumbers(a, b) { return a + b; }


//Recursion

var timer = function(seconds){
    if (seconds > 0){
        console.log(seconds)
        return timer(seconds-1) //substracts 1 second from inital numer , works as a loop
        
    }else{
        return seconds
    }
}

timer(10);