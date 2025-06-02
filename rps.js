let rock =  'rock'
let paper = 'paper'
let scissors = 'scissors'
let gameNumber = 0
let humanScore = 0
let computerScore = 0

function playGame() {





function getComputerChoice() {
    

   let a = (Math.random()*3);
    if (a <= 1) {
        return 'rock'
    } else if (a > 1 && a <= 2) {
        return 'paper'
    } else {
        return 'scissors'
    }

}




function getHumanChoice() {
   return prompt('what is your choice?')
    
}



function playRound(humanChoice, computerChoice) {
    let s = humanChoice.toLowerCase();
    let n = computerChoice;
    if (s === computerChoice) {
        console.log('no one won, drow!')
    } else if (((s == rock) && (n == scissors)) || ((s == scissors) && (n == paper)) || ((s == paper) && (n == rock))) {
        (humanScore++)
         console.log(s + ' beat ' + 'your ' + computerChoice)
    } else if (((n == rock) && (s == scissors)) || ((n == scissors) && (s == paper)) || ((n == paper) && (s == rock))) {
        (computerScore++)
        console.log(computerChoice + ' beat ' + 'your ' + s)
    
    } else {}

} 


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

    if (++gameNumber < 5) {
        return playGame()
    } else if (humanScore === computerScore) {
         console.log('drow')
    } else if (humanScore > computerScore) {
         console.log('congratulation! you won')
    } else {
         console.log('game over')
    }

}
console.log(playGame())