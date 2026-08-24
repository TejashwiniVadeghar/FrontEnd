//create 2 vars, firstName and lastName
//concatenate 2 vars into a third variable called fullName
//log fullName to the console

let firstName="Tejashwini"
let lastName="Vadeghar"
let fullName=firstName+" "+lastName
console.log(fullName);

let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function greet(){
    let greetText=greeting+", "+name+"!"
}
greet()

let myPoints=3
function add3Points()
{
    myPoints+=3
}
function remove1Point(){
    myPoints-=1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)