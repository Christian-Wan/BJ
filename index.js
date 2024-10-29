// Build a BlackJack Game


// variables representing two cards
let firstCard = 0
let secondCard = 0
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber == 1) {
        randomNumber = 11
    }
    else if (randomNumber > 10) {
        randomNumber = 10
    }
    return randomNumber
}

function newCard() {
    cards.push(getRandomCard)
    renderGame()
}

function startGame() {
    isAlive = true
    newCard()
    newCard()
}

function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardsel += cards[i]
        if (i != cards.length - 1) {
            cardsel += ", "
        }
    }
    document.getElementById("cards-el").innerHTML = cardsel
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum == 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
    }
    else {
        message = "You're out of the game! 😭"
    }
    document.getElementById("message-el").innerHTML = message
    console.log(message)
}





