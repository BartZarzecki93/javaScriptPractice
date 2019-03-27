var age = 17;
if(age >= 18){
    console.log("You can vote!");
}else{
    console.log("You can't vote");
}

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {    //Note: You don't have to have the ===
    console.log("Going up");
} else {
    console.log("Going down");
}  
//elevator will go up

if (elevatorBroken) {    //Note: You don't have to have the ===
    console.log("Bummer. Let's take the stairs.");
} else {
    console.log("Which floor?");
}  
//elevator is broken

//Write another one for stuck:
if (elevatorStuckWhileWeAreOnIt){
    console.log("Oh no! We're stuck!");
} else {
    console.log("This elevator is fast.");
}

if (elevatorStuckWhileWeAreOnIt===false){
    console.log("Lets go!");
} else {
    console.log("fuck");
}



//But maybe we're standing there waiting?
if(elevatorBroken && elevatorDown){
    console.log("I hope this thing doesn't start flying down!");
    //thats the answer 
} else {
    console.log("How long are you in town for?");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
    console.log("Hi Bob, this is Bob with maintenance. How can I help?");
}

//Using ints and other types, both need to be tru in this case
if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
    console.log("This is not our lucky day!");
}




var bankAccount;
var debt = 4200;
bankAccount = 50000;
var difference = bankAccount - debt;

console.log("I have $" + bankAccount + ", in my bank account, and I am $" + debt + " in debt.");

if (bankAccount - debt > 700) {
        console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");    
    } 
    else{
        console.log("It probably isn't a good time to pay off my debt.")
}

