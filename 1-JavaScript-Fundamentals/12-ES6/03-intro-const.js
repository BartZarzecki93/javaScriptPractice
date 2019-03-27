//This worksonly, need to initialize everyhting !!!
const constWithInitializer = 'Initializing as a string';
console.log(constWithInitializer);

//----------------------------
//this will not work
//const constNumber;
//constNumber = 10;
//console.log(constNumber); //Error missing initializer in const declaration

//---------------------------------
//cannot reasign values

//const constWithInitializer = 'Initializing as a string';
//console.log(constWithInitializer);

//Reassigning the value
//This will throw an error
//constWithInitializer = "New value";
//console.log(constWithInitializer);


///-------------------------
//we can add to the const
const constWithInitializer2 = 'Initializing as a string';
console.log(constWithInitializer2);

const ok = ", ok?";
console.log(constWithInitializer2.concat(ok));

const singers = ['Jagger', 'Plant', 'McCartney', 'Lennon'] //it was used in the function below to check names of the singers

console.log(singers);

singers.push('Cobain')
console.log(singers)

//What we can't do is create an entirely new reference to a whole different array. it would break

//chalange----------------------------------------------------
//checking names of foods

//1
const favoriteFoods = ['apples', 'beets', 'cauliflower', 'dairy'];

//3
const diet = checkFoodList(favoriteFoods);

//4
const shortNames = diet.checkForShorterNames();
console.log("Short names:", shortNames)

//5
const longNames = diet.checkForLongerNames();
console.log("Long names:", longNames);

//2
function checkFoodList(items) {
  return {
    checkForShorterNames: () => items.filter(item => item.length <= 6),
    checkForLongerNames: () => items.filter(item => item.length > 6)
  }
}

//------------------------
//same as above but with singers, playing with const and reading and placing function and outputs 
const singerN = checkNames(singers);

//4
const shortNames2 = singerN.checkForShorterNames();
console.log("Short names:", shortNames2)

//5
const longNames2 = singerN.checkForLongerNames();
console.log("Long names:", longNames2);

//2
function checkNames(items) {
  return {
    checkForShorterNames: () => items.filter(item => item.length <= 5),
    checkForLongerNames: () => items.filter(item => item.length > 5)
  }
}