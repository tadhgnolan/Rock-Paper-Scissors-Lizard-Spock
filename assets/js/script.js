/* jshint esversion: 11 */
const userChoice = document.getElementById("userChoice");
const userWins = document.getElementById("userWins");
const opponentChoice = document.getElementById("opponentChoice");
const opponentWins = document.getElementById("opponentWins");
const resultChoice = document.getElementById("resultChoice");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let user;
let opponent;
let userWinCount = 0;
let opponentWinCount = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    user = button.innerText;
    opponentTurn();
    userChoice.innerText = `User: ${user}`;
    opponentChoice.innerText = `Opponent: ${opponent}`;
    let resultText = checkWinner();
    resultChoice.innerText = resultText;
    if (resultText == "You Win!🎉") {
        userWinCount++;
        userWins.innerText = userWinCount;
    } else if (resultText == "You Lose!🎻") {
        opponentWinCount++;
        opponentWins.innerText = opponentWinCount;
    }
}));

function opponentTurn() {

    const numGen = Math.floor(Math.random() * 5) + 1;

    switch (numGen) {
        case 1:
            opponent = "🤘Rock";
            break;
        case 2:
            opponent = "✋Paper";
            break;
        case 3:
            opponent = "✌Scissors";
            break;
        case 4:
            opponent = "🤏Lizard";
            break;
        case 5:
            opponent = "🖖Spock";
            break;
    }
}

function checkWinner() {
    if (user == opponent) {
        return "Draw!";
    } else if (opponent == "🤘Rock") {
        return (user == "✋Paper" || user == "🖖Spock") ? "You Win!🎉" : "You Lose!🎻";
    } else if (opponent == "✋Paper") {
        return (user == "✌Scissors" || user == "🤏Lizard") ? "You Win!🎉" : "You Lose!🎻";
    } else if (opponent == "✌Scissors") {
        return (user == "🤘Rock" || user == "🖖Spock") ? "You Win!🎉" : "You Lose!🎻";
    } else if (opponent == "🤏Lizard") {
        return (user == "🤘Rock" || user == "✌Scissors") ? "You Win!🎉" : "You Lose!🎻";
    } else if (opponent == "🖖Spock") {
        return (user == "✋Paper" || user == "🤏Lizard") ? "You Win!🎉" : "You Lose!🎻";
    }
}