const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
    const word = document.createElement("span");

    word.innerHTML = `${text} `;

    word.classList.add("card-subtitle-word");

    word.style.transitionDelay = `${index * 40}ms`;

    return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("|| Scissors cuts paper ||");

createSubtitle("Paper covers rock ||");

createSubtitle("Rock crushes lizard ||");

createSubtitle("Lizard poisons Spock ||");

createSubtitle("Spock smashes scissors ||");

createSubtitle("Scissors decapitates lizard ||");

createSubtitle("Lizard eats paper ||");

createSubtitle("Paper disproves Spock ||");

createSubtitle("Spock vaporizes rock ||");

createSubtitle("Rock crushes scissors ||");