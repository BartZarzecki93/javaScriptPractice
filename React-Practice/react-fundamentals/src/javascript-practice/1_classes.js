//ES6 JS Classes
class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }
  //Method 1
  greet() {
    console.log("Welcome back, " + this.name);
  }
  //Method 2
  status() {
    console.log("Current status: " + this.type);
  }
}
//Instance of the class/new object
var anonDude = new User("Anonymous dude");

//we can now use the instance and the . operator
// to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

class User1 {
  constructor(first, last, e) {
    this.f = first;
    this.l = last;
    this.email = e;
  }
}

var userOne = new User1("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}

class car {
  constructor(make, model, avgS) {
    this.Make = make;
    this.Model = model;
    this.AvarageSpee = avgS;
  }
}
var carOne = new car("Ford", "Focus", 150);
console.log(carOne);
