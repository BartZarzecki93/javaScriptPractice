function isLoggedIn3(password) {
    if (password === '123abc') {
      var login = "You are logged in!";
    }
    return login;
}
//This would break.....
//console.log(login);

function isLoggedIn2(password) {
    if (password === '123abc') {
      var login = "You are logged in4!";
    }
    return login;
}
//Add these calls:
var x = isLoggedIn2('123abc')
console.log(x);
  // <- true
var y = isLoggedIn2('two')
console.log(y);
  // <- undefined because it doesn't meet the `var login` requirements fro the `password` variable.

  ///we cannot change to let beacues it will not be available outsice of the scope so it will not retunr
  //below it will work since the let variable is outside of the scope

  function isLoggedIn(password) {
    let login = "Please log in with a correct password";
    if (password === '123abc') {
      login = "You are logged in1!";
    }
    else{
        console.log('wrong');
    }
    return login;
  }
var x = isLoggedIn('123abc')
console.log(x);





//challange with card number
function checkCreditCard (cardNum)

{
let cardNumebr = "Please enter a valid card'";
if (cardNum ==4242){
    cardNumebr = "loggedin";
}
else{console.log('Wrong')}
return cardNumebr

}
var y = checkCreditCard(4242);
console.log(y);