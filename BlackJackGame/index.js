//create 2 vars, firstCard and secondCard 
//create a var, sum and set it to sum of the two cards

let firstCard=7
let secondCard=9

let sum=0

sum = firstCard + secondCard
console.log(sum)
if(sum < 21){
    console.log("Do you want to draw a new card?")
}else if(sum === 21){
    console.log("Wohoo, You got the BlackJack!")
}else {
    console.log("You are out of the game!")
}    
