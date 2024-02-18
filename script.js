let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let error = document.getElementById("errorMsg");

function createAndAppend(eachWord) {
    let randomNumber = Math.ceil(Math.random() * 70);
    let spanElement = document.createElement('span');
    spanElement.textContent = eachWord;
    spanElement.style.padding = "8px";
    spanElement.style.fontSize = randomNumber + "px";
    wordsContainer.appendChild(spanElement);
}

let addBtn = document.getElementById("addBtn");
addBtn.onclick = function() {
    if (userInput.value === "") {
        error.textContent = "Please enter a word";
    } else {
        error.textContent = "";
        createAndAppend(userInput.value);
        userInput.value = "";
    }
}

for (let eachWord of wordCloud) {
    createAndAppend(eachWord);
}