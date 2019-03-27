//1                //2
var bobAlcorn = {
    //3                    //4
    name             : "Bob Alcorn",
    age              : 59,
    vocation        : "Chief Operating Officer",
    isRetired        : false
};

console.log(bobAlcorn); //1
console.log(bobAlcorn.name); //2
console.log(bobAlcorn.age); //3
console.log(bobAlcorn.middleName); //undefined bc this property does not exist

var bart = {
    //3                    //4
    name             : "Bart",
    age              : 59,
    sport           : "Swimming",
    isRetired        : false
};
/*just the text not as property*/
var bartArray = ["name", "age", "sport","isRetired"];
function winning()
        {
            console.log(bart.bartArray[i]);
        
        }

        for(i=0; i<=3; i++)
        {
            winning();
        }