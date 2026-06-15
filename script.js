const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock") return "Tie!";
        else if(computerChoice === "paper") {
            computerScore++;
            return "Computer choose paper. You Lose!";
        } else if (computerChoice === 'scissors') {
            humanScore++;
            return "Computer choose scissors. You Win!";
        }
    } 
    else if (humanChoice === "paper"){
        if (computerChoice == "paper") return "Tie!";
        else if (computerChoice === "scissors"){
            computerScore++;
            return "Computer choose scissors. You choosed paper you lose!";
        }
        else if(computerChoice === "rock"){
            humanScore++;
            return "Computer choose rock. You choosed paper you win!";
        }
    }
    else if (humanChoice === "scissors"){
        if(computerChoice === "scissors") return "Tie!";
        else if(computerChoice === "rock") {
            computerChoice++;
            return "Computer choose rock. You choosed scissors you lose!";
        }
        else if(computerChoice === "paper"){
            humanChoice++;
            return "Computer choose paper. You choosed scissors you lose!";
        }
    } 
}

function playGame(rounds){
    let humanChoice, computerChoice;
    for(let i = 0; i < rounds; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        console.log(`You: ${humanScore} - Computer: ${computerScore}`)
    }
}

function getComputerChoice(){ 
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let choice = "";
    while(!validateChoice(choice)){
        choice = prompt('Choose rock, paper, scissors');
        choice.toLowerCase();
    }
    return choice;
}

function validateChoice(choice) { return choices.includes(choice); }

// getHumanChoice();
playGame(5); 
