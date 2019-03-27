// Object is created using the literal notation.
let johnSmith = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    eyeColor: 'blue'
};
for (var container2 in johnSmith){
    console.log(container2);
}
console.log('-------------');

// Object is created using Object()
var person = new Object();
person.firstName = "Jane";
person.lastName = "Doe";
person.age = 21;
person.eyeColor = "brown";

for (var container2 in person){
    console.log(container2);
}
console.log('-------------');


const person1 = {
    isHuman: false,
    printIntroduction: function () 
    {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person1);
  
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();

  for (var container2 in person.me){
    console.log(container2);
}
console.log('-------------');

