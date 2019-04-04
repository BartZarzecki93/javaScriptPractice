function callbackFunction() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }

  const data = {
    name: "Ralf Machio",
    age: 66,
    occupation: "kickboxing"
  };
  return data;
}

function showData(dataFromFunction) {
  return "hello " + dataFromFunction.name;
}

console.log(showData(callbackFunction()));

//it will show output after for loop is done, so you need to wait till function is called
