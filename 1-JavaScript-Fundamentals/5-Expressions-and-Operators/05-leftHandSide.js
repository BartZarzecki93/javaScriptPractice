function Game(score, winner, loser) {
    this.score = score;
    this.winner = winner;
    this.loser = loser;
}

let SBLII = new Game(41-33, "Philadelphia Eagles", "New England Patriots");

console.log(SBLII.loser); //"New England Patriots"
console.log(SBLII.winner); //"New Phil"












// ask scott about that section 

let news = {
    //story 1: "headline",
    //story 2: "important",
    weather: {
        tomorrow: "sunny",
        wednesday: "rain"
    },
    sports: {
        baseball: "Home run!",
        football: "Touchdown!"
        
    }
}
    function throwToCommercial(segment, time) {
        console.log("We'll be back with " + segment + " in " + time + "minutes after this short break.");
    }
    
super.throwToCommercial('sports', 2);