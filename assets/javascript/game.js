
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerGuess = randomChar();;

function randomChar() {
    
    var chosen = "";
    var letter = "abcdefghijklmnopqrstuvwxyz";
    
    for (var i = 0; i < 5; i++) {
        
        chosen += letter.charAt(Math.floor(Math.random() * letter.length));
        
        return chosen;
    }
}

console.log(computerGuess);
document.onkeyup = function(event) {
    
    var userGuess = event.key;
        guessesSoFar.push(userGuess);
        console.log(guessesSoFar);
        match(userGuess);
    }


function match(userGuess) {

    while (guessesLeft > 0) {
        if (userGuess === computerGuess) {
            wins++;
        } else {
            guessesLeft--;
        }

}
loses++;

}

document.getElementById("lettersGuessed").innerHTML = "<p>" + guessesSoFar + "<p>";
document.getElementById("guessesLeft").innerHTML = "<p>" + guessesLeft + "<p>";
document.getElementById("wins").innerHTML = "<p>" + wins + "<p>";
document.getElementById("loses").innerHTML = "<p>" + loses + "<p>";