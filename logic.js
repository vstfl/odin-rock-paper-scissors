console.log("Hello World")

function getComputerChoice() {
    let choiceNum = Math.random()*3;
    let choice;
    if (choiceNum <=1) {
        choice = "rock";
    } else if (choiceNum <=2) {
        choice = "paper";
    } else if (choiceNum <=3) {
        choice = "scissors";
    }
    console.log(`Computer plays ${choice}!`);
    return choice;
}

function getHumanChoice(input) {
    let lower = prompt(input).toLowerCase();
    if (lower !=='rock' 
    && lower !=='paper' 
    && lower !=='scissors') {
        lower = getHumanChoice(input);
    }
    return lower;
}

function playRound(humanChoice, computerChoice) {
    let gameState = true;
    let finalOutput;
    console.log(`You play ${humanChoice}!`);
    
    if ((humanChoice == 'rock' && computerChoice == 'paper')
    ||(humanChoice == 'paper' && computerChoice == 'scissors')
    ||(humanChoice == 'scissors' && computerChoice == 'rock')) {
        ++computerScore;
        finalOutput = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else if ((humanChoice == computerChoice)) {
        finalOutput = 'Tie! Go again!';
    } else {
        ++humanScore;
        finalOutput = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    console.log(finalOutput);
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if (computerScore == 5 || humanScore == 5) {
        let winner;
        (humanScore==5) ? winner = 'You win!' : winner = 'Computer wins!';
        console.log(`Game's finished! ${winner}`);
        gameState=false;
    }

    if (gameState) {
        return playRound(getHumanChoice(), getComputerChoice());
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

}

playGame();