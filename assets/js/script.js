const userChoice = document.getElementById("userChoice");
const opponentChoice = document.getElementById("opponentChoice");
const resultChoice = document.getElementById("resultChoice");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let user;
let opponent;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    user = button.innerText;
    opponentTurn();
    userChoice.innerText = `User: ${user}`;
    opponentChoice.innerText = `Opponent: ${opponent}`;
    resultChoice.innerText = checkWinner();
}));

function opponentTurn() {

    const numGen = Math.floor(Math.random() * 5) + 1;

    switch (numGen) {
        case 1:
            opponent = "Rock";
            break;
        case 2:
            opponent = "Paper";
            break;
        case 3:
            opponent = "Scissors";
            break;
        case 4:
            opponent = "Lizard";
            break;
        case 5:
            opponent = "Spock";
            break;
    }
}

function checkWinner() {
    if (user == opponent) {
        return "Draw!";
    } else if (opponent == "Rock") {
        return (user == "Paper", "Spock") ? "You Win!" : "You Lose!"
    } else if (opponent = "Paper") {
        return (user == "Scissors", "Paper") ? "You Win!" : "You Lose!"
    } else if (opponent = "Scissors") {
        return (user == "Rock", "Spock") ? "You Win!" : "You Lose!"
    } else if (opponent = "Lizard") {
        return (user == "Rock", "Scissors") ? "You Win!" : "You Lose!"
    } else if (opponent = "Spock") {
        return (user == "Paper", "Lizard") ? "You Win!" : "You Lose!"
    }
}