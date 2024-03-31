// get computer choice
let computerChoice = () => {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)]
}

// game logic
let gameLogic = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "Its a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissor" && computerSelection === "paper")) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}


// playing the game
for (i = 0; i < 5 ; i++) {
    let userPrompt = prompt("enter your choice: ");
    let playerSelection = userPrompt.toLowerCase();
    let computerSelection = computerChoice();
    let result = gameLogic(playerSelection,computerSelection);
    console.log(result)
}