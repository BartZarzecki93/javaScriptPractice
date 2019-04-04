function callbackFunction() {
  const data = {
    name: "Ralf Machio",
    age: 66,
    occupation: "kickboxing"
  };
  return data;
}

function showGreeting(dataFromFunction) {
  return "hello " + dataFromFunction.name + ", I hear you're the greatest?!";
}

function showSport(dataFromObject) {
  return dataFromObject.name + "is: " + dataFromObject.occupation;
}

console.log(showGreeting(callbackFunction()));
console.log(showSport(callbackFunction()));
