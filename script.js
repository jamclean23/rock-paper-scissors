//Javascript

let userWinCount = 0;
let computerWinCount = 0;
let gameCount = 0;


//Ask user for input from button and store

//Rock button
let rockBtn = document.getElementById('rock-btn');
rockBtn.addEventListener('click', function(){
    console.log("ROCK");
    ++gameCount;
    game("rock");
    updateScore();
    
});

//Paper button
let paperBtn = document.getElementById('paper-btn');
paperBtn.addEventListener('click', function(){
    console.log("PAPER");
    ++gameCount;
    game("paper");
    updateScore();
    

    });
        
//Scissors button
let scissorsBtn = document.getElementById('scissors-btn');
scissorsBtn.addEventListener('click', function(){
    console.log("SCISSORS");
    ++gameCount;
    game("scissors");
    updateScore();
    
});




//FUNCTIONS


//Function to run the game loop

function game(userInput) {

    //Calculate computer choice
    let compChoice = numberToSign(Math.floor(Math.random()*3+1));

    //Calculate the winner and print the result
    let winner = playRound(userInput, compChoice);
     
    if (winner == "tie") {
        document.getElementById("main-content").textContent = `It's a tie! You chose ${userInput} and the computer chose ${compChoice}`;
        console.log(`It's a tie! You chose ${userInput} and the computer chose ${compChoice}`);
    } else if (winner == "user") {
        ++userWinCount;
        document.getElementById("main-content").textContent = `You won! ${capitalize(userInput)} beats ${compChoice}`;
        console.log(`You won! ${capitalize(userInput)} beats ${compChoice}`);
    } else if (winner == "computer") {
        ++computerWinCount;
        document.getElementById("main-content").textContent = `You lost! ${capitalize(compChoice)} beats ${userInput}`;
        console.log(`You lost! ${capitalize(compChoice)} beats ${userInput}`);
    }

    if (gameCount == 5) {
        if (userWinCount > computerWinCount) {
            document.getElementById("main-content").textContent = "You've defeated the computer! There is still hope for the human race.";
            gameCount = 0;
        } else if (userWinCount < computerWinCount) {
            document.getElementById("main-content").textContent = "The computer has vanquished you in battle. Surely this is the end of days.";
            gameCount = 0;
        } else if (userWinCount == computerWinCount) {
            document.getElementById("main-content").textContent = "It's a tie ... the battle continues.";
            gameCount = 0;
        }

        userWinCount = 0;
        computerWinCount = 0;
    }
    

    //Display tally
    console.log("computer: " + computerWinCount);
    console.log("You: " + userWinCount);



}


//Function to update score boxes

function updateScore() {
    //Update text boxes

    let userScoreBox = document.getElementById("user-score");
    userScoreBox.textContent = userWinCount;

    let computerScoreBox = document.getElementById("computer-score");
    computerScoreBox.textContent = computerWinCount;

    let roundBox = document.getElementById("round-box");
    roundBox.textContent = gameCount + "/5";



}


//Function to convert number value to rock paper or scissors

function playRound(playerChoice, computerChoice) {

    //Convert strings to number values
    let userNumber = signToNumber(playerChoice);
    let computerNumber = signToNumber(computerChoice);

    //Compare number values, determine winner
    if (userNumber == computerNumber) {
        return "tie";
    } else if (userNumber == computerNumber + 1 || userNumber == computerNumber - 2) {
        return "user";
    } else if (userNumber == computerNumber -1 || userNumber == computerNumber + 2) {
        return "computer";
    }


}

function numberToSign(num) {
    if (num == 1) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else if (num == 3) {
        return "scissors";
    } else {
        return "Out of range";
    }
}

//Function to convert rock paper or scissors to a number value between 1 and 3

function signToNumber(sign) {
    if (sign == "rock") {
        return 1;
    } else if (sign == "paper") {
        return 2;
    } else if (sign == "scissors") {
        return 3;
    } else {
        return "Out of range"
    }
}

function capitalize(string) {
    firstLetter = string.slice(0,1);
    restOfWord = string.slice(1);
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + restOfWord;

}