let player = {
    name: "Nick",
    chips: 7000
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10){
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard, secondCard)
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", " 
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do yo want to draw a new card?";
    } else if (sum === 21) {
        message = "WOW! You got Black Jack!";
        hasBlackJack = true;
    } else {
        message = "You Just Bust! You Lose! Try Again?";
        isAlive = false;
    }
    messageEl.textContent = message;
};

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}