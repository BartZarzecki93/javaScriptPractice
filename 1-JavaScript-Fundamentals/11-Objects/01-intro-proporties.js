var gideon = { name: "Zelda", size: "small", color: "brown", favToy: "hair ties"}
var zelda = { name: "Gideon", size: "large", color: "orange", favToy: "cat nip carrot"}

var cats = [
    { name: "Zelda", size: "small", color: "brown", favToy: "hair ties"},
    { name: "Gideon", size: "large", color: "orange", favToy: "cat nip carrot"}
];

var movie = {
    //These are properties
    name : "The Godfather",
    director: "Martin Scorsese"
};

console.log(movie.name);


var netflix = {
    id: 1,
    name: "",
    seasonInfo: 
    {
        episodeInfo : 
        
        [
            { episode: 1, episodeName: "Hey Paul"},
            { episode: 2, episodeName: "Yes Paul"}
        ]
    }
};

console.log("All data:", netflix);
console.log("Just season info: ", netflix.seasonInfo);
console.log("Episode Number: ", netflix.seasonInfo.episodeInfo[0].episode);



for (var container in netflix.seasonInfo.episodeInfo.episodeName){
    console.log(netflix.seasonInfo.episodeName[container]);
}

var student = 
{
    id: 1,
    name: 
    {
        firstName: ["Bartosz"],
        lastName: ["Zarzecki"],
    },
    address: 
    {
        streetInfo : 
        [
            { born: 1, street: "Hey Paul"},
            { currentAddres: 2, street: "Yes Paul"}
        ]
    }
};
console.log("All data:", student);
console.log("All data:", student.address);
console.log("All data:", student.address.streetInfo[1].street);

for (var container1= 0; container1<2; container1++)
{
    
    console.log(student.address.streetInfo[container1].street);
}

for (var container2 in student){
    console.log(container2);
}
console.log('-------------');

for (var container3 in student.name){
    console.log(container3);
}
console.log('-------------');

for (var container4 in student.name){
    console.log(container4+ ': ' + student.name[container4]);
}
console.log('-------------');

for (var container5 in student.address.streetInfo){
    console.log(container5+ ': ' + student.address.streetInfo[container5]);
}
console.log('-------------');

for (var container5 in student.address.streetInfo.street){
    console.log(container5+ ': ' + student.address.streetInfo.born.street[container5]);
}
console.log('-------------');

///ask scott  about last line


