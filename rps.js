console.log("Welcome to Rock, Paper, Scissors!")

////////////////////////////////////////////
// 1. Get Computer Choice
function getCompChoice() {
    let compChoice = null;

    randVal = Math.floor(Math.random()*100)+1
    //console.log(randVal)

    if (randVal <= 33){
        compChoice = "Rock"
        }
    else if (randVal <= 66){
        compChoice = "Paper"
    }
    else {
        compChoice = "Scissors"
    }

    console.log("Computer choice is: ", compChoice)
    
    return compChoice;
    }


////////////////////////////////////////////
// 2. Get Player Choice
function getPlayerChoice(){
    let playerInput = prompt("\n\n\nEnter player choice: (r)ock, (p)aper, or (s)cissors")
    //console.log(playerInput)

    let playerChoice = null;

    let playerFirstLetter = playerInput.charAt(0).toLowerCase();
    if (playerFirstLetter === "r"){
        playerChoice = "Rock"
        console.log("Player choice: ", playerChoice);
        return playerChoice
        }
    else if (playerFirstLetter === "p"){
        playerChoice = "Paper"
        console.log("Player choice: ", playerChoice);
        return playerChoice
        }
    else if (playerFirstLetter === "s"){
        playerChoice = "Scissors"
        console.log("Player choice: ", playerChoice);
        return playerChoice
        }
    else {
        console.log("Please enter a valid selection...")
        return getPlayerChoice()
        }

    }


////////////////////////////////////////////
// 3. Play Round
function playRound(){
    let playerChoice = getPlayerChoice();
    let compChoice = getCompChoice();
    let result = null;
    if (playerChoice === compChoice) {
        
        console.log("Draw! Replaying round...");
        result = "draw"
        //console.log(result)
        return result;
        }
    else if (
            (playerChoice==="Rock" && compChoice==="Scissors") ||
            (playerChoice==="Paper" && compChoice==="Rock") ||
            (playerChoice==="Scissors" && compChoice==="Paper")
            ){
        console.log("Player wins! " + playerChoice + " beats " + compChoice +"!");
        result = "playerWin";
        //console.log(result)
        return result;
        }
    else {
        console.log("Computer wins! " + compChoice + " beats "+ playerChoice + "!");
        result = "compWin";
        //console.log(result)g
        return result;
        }
    }




/////////////////////////////////////
// 4. Play 5-Round Game 
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    
    let roundNumber = 1;
    while (roundNumber <= 5){
        console.log("\n\n\nRound Number " + roundNumber + "!")
        let result = playRound()
        if (result === "playerWin"){
             playerScore++
             console.log("Player wins round " + roundNumber)
             roundNumber++;
            }
        else if (result === "compWin"){
            computerScore++
            console.log("Computer wins round " + roundNumber)
            roundNumber++;
            }
        console.log("   Player score: " + playerScore)
        console.log("   Computer score: " + computerScore)
                
        }
    console.log("\n\n\n----- FINAL SCORE: -----")
    console.log("PLAYER: " + playerScore)
    console.log("COMPUTER: " + computerScore)
    }

playGame();