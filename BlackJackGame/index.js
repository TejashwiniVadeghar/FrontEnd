//create 2 vars, firstCard and secondCard 
//create a var, sum and set it to sum of the two cards

let firstCard=7
let secondCard=9

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById('sum-el')
//let sumEl = document.querySelector('.sum-el')
let cardsEl = document.getElementById("cards-el")
function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: "+sum
    console.log(sum)
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo, You got the BlackJack!"
        hasBlackJack=true
    }else {
        message = "You are out of the game!"
        isAlive=false
    }    
    messageEl.textContent = message
}

function newCard(){
    message = "New Cards: "
    messageEl.textContent = message
}
