// Get the container div where buttons will be appended
const container = document.getElementById('container');

// Get the result textarea element
const resultTextarea = document.getElementById('result');

// Define game results in an array [playerChoice, computerChoice, resultMessage, resultClass]
const gameResults = [
    ["rock", "scissor", "You won! rock beats scissor", "win"],
    ["paper", "rock", "You won! paper beats rock", "win"],
    ["scissor", "paper", "You won! scissor beats paper", "win"],
    ["rock", "paper", "You lose! paper beats rock", "lose"],
    ["paper", "scissor", "You lose! scissor beats paper", "lose"],
    ["scissor", "rock", "You lose! rock beats scissor", "lose"],
    ["rock", "rock", "It's a tie!", "tie"],
    ["paper", "paper", "It's a tie!", "tie"],
    ["scissor", "scissor", "It's a tie!", "tie"]
];

// Function to update the result textarea with specified text and class
const updateResult = (text, resultClass) => {
    resultTextarea.value = text;
    resultTextarea.className = `result-box ${resultClass}`;
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
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        const [playerChoice, computerChoice, resultMessage, resultClass] = gameResults.find(result => result[0] === playerSelection && result[1] === computerSelection);
        updateResult(resultMessage, resultClass);
    });

    // Append button to the container
    container.appendChild(button);
}
