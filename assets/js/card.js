/* jshint esversion: 11 */
const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
    const word = document.createElement("span");
    let delay = Math.floor(Math.random() * 1200);

    word.innerHTML = `${text} `;

    word.classList.add("card-subtitle-word");

    word.style.transitionDelay = `${delay}ms`;

    return word;
};

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("🔷 Scissors cuts paper");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Paper covers rock");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Rock crushes lizard");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Lizard poisons Spock");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Spock smashes scissors");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Scissors decapitates lizard");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Lizard eats paper");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Paper disproves Spock");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Spock vaporizes rock");
subtitle.appendChild(document.createElement("br"));
createSubtitle("🔷 Rock crushes scissors");