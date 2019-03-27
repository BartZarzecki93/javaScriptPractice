var paul = {
  name: "Paul",
  age: 41
};

var sophie = Object.create(paul);
var ava = Object.create(paul);
//---------------------------

let Aaron = {
  age: 30,
  height: "70in",
  hairColor: "brown",
  eyeColor: "black",
  glasses: true
};

let Kaylea = Object.create(Aaron);

//Object Kaylea has the same properties of object Aaron, so we have to maually change each property
Kaylea.age = 26;
Kaylea.height = "66in";
Kaylea.hairColor = "black";
Kaylea.eyeColor = "brown";
Kaylea.glasses = false;

for (container in Aaron) {
  console.log(container + ": " + Aaron[container]);
}

console.log("--------------------");
for (container2 in Kaylea) {
  console.log(container2 + ": " + Kaylea[container]);
}
