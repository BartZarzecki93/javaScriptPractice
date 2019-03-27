function Person(name, age, eyecolor){
    //Note that the argument aligns with the RHS(Right Hand Side) 
    //The variable created will take the place of this
    this.name = name;
    this.age = age;
    this.eyecolor = eyecolor;
}

var paul = new Person("Paul", 41, "brown");
console.log(paul.name);

var sophie = new Person("Sophie", 5, "yellow");
var ava = new Person("Ava", 15, "green");

console.log(sophie.eyecolor);

for (var container2 in sophie, paul, ava){
    console.log(container2 + ':' +sophie[container2]);
    console.log(container2 + ':' +paul[container2]);
    console.log(container2 + ':' +ava[container2]);
}
//will dipslay all information(properties) about all objects
console.log('-------------');
