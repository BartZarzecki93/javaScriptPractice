var country = {
    capital : "Tegucigalpa",
    name: "Honduras",
    mainExport: "Bananas"
};
//Since everything is enumerable, our for in loop should be able to find everything.
for (var property in country){
    console.log(property + ' : ' + country[property]);
}
/*
capital : Tegucigalpa
name : Honduras
mainExport : Bananas
*/

