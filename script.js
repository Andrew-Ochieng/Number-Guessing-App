let username = prompt("Enter your username: ")


let level = 1 
function game(min, max) {
    while(true){
        let guess = Math.floor((Math.random()*(max - min)) + min);
        console.log(guess); //Where the cheat line is😎
        let userGuess = prompt("Guess a number between " + min + " and " + max + ": ");
        let point = level - 1 //=0
    
            if (userGuess === guess.toString()){
                    level++
                    max++
                    point++
              
                    console.log(`Correct! Proceed to level ${level} 😎😎... `, "  You have " + point + " points")
                    continue;
            }else{
                    console.log("Game over! The correct guess is " + guess)
                    break;
            }
        }

}

game(1, 2)