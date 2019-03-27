//1
function Player(name, points){
    this.name = name;
    this.points = points;
}

//2
var paul = new Player("Paul", 100);
var quincy = new Player("Quincy", 104);

//3
console.log(paul.name); //Paul
console.log(quincy.name);//Quincy



function Band (name, genre)
{
    this.name =name;
    this.genre = genre;
}

var beegees = new Band ("BeeGees", "folk");

for (container in beegees)
{
    console.log(container + ": "+ beegees[container]);

}
