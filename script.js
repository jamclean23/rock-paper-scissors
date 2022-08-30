//Javascript


game();


//FUNCTIONS


//Function to run the game loop

function game() {

    //Run rock paper scissors five times, announce the winner
    
    let userWinCount = 0;
    let computerWinCount = 0;

    for (let i = 0; i < 5; ++i) {

        //Ask user for input and store in string format
        let keepGoing = true;
        while (keepGoing) {
            userInput = prompt("Do you choose rock, paper, or scissors?");
            userInput = userInput.toLowerCase();
            if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
                keepGoing = false;
            } else {
                alert("Invalid choice");    
            }
                
        }

        //Calculate computer choice
        let compChoice = numberToSign(Math.floor(Math.random()*3+1));

        //Calculate the winner and print the result
        let winner = playRound(userInput, compChoice);
        
        if (winner == "tie") {
            console.log(`It's a tie! You chose ${userInput} and the computer chose ${compChoice}`);
        } else if (winner == "user") {
            ++userWinCount;
            console.log(`You won! ${capitalize(userInput)} beats ${compChoice}`);
        } else if (winner == "computer") {
            ++computerWinCount;
            console.log(`You lost! ${capitalize(compChoice)} beats ${userInput}`);
        }

        //Display tally
        console.log("computer: " + computerWinCount);
        console.log("You: " + userWinCount);

    }

    //Calculate overall winner and display
    
    if (userWinCount > computerWinCount) {
        console.log("You have triumphed over the machine! There is still hope for the human race.");
    } else if (computerWinCount > userWinCount) {
        console.log("The computer has crushed you! Surely this marks the last days of mankind.");
    } else if (userWinCount == computerWinCount) {
        console.log("A tie! The battle wages ever on.");
    }
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