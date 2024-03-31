// Get the container div where buttons will be appended
const container = document.getElementById('container');

// Get the result textarea element
const resultTextarea = document.getElementById('result');

// Get computer choice
const computerChoice = () => {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
};

// Game logic
const gameLogic = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
};

// Loop to create three consecutively numbered buttons
for (let i = 0; i < 3; i++) {
    // Create a button element
    const button = document.createElement('button');
    let choices = ["rock", "paper", "scissor"];

    // Set button properties
    button.textContent = choices[i]; // Set button text
    button.id = `btn${i + 1}`; // Set unique button id

    // Add event listener to each button
    button.addEventListener("click", () => {
        const playerSelection = choices[i]; // Assign the selected choice to playerSelection
        const computerSelection = computerChoice();
        const result = gameLogic(playerSelection, computerSelection);
        resultTextarea.value = result; // Update the result in the textarea
    });

    // Append button to the container
    container.appendChild(button);
}
