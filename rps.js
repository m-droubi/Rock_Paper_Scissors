
let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'
let humanScore = 0
let computerScore = 0
const Body = document.querySelector("body")
const gop = document.querySelector('#re');
const txt = document.createElement("div");
txt.classList.add("txt");
Body.appendChild(txt);
txt.style.whiteSpace = "pre-line"

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



function playRound(humanChoice, computerChoice) {
    let s = humanChoice;
    let n = computerChoice;
    if (s === n) {
        txt.textContent = `drow!
                           Your score: ${humanScore}
                           Computer score: ${computerScore}`;
    } else if ((humanScore < 4) && (((s == rock) && (n == scissors)) || ((s == scissors) && (n == paper)) || ((s == paper) && (n == rock)))) {
        txt.textContent = `Your ${s} beat the ${computerChoice}
                           Your score: ${++humanScore}
                           Computer score: ${computerScore}`;
    } else if ((computerScore < 4) && (((n == rock) && (s == scissors)) || ((n == scissors) && (s == paper)) || ((n == paper) && (s == rock)))) {
        txt.textContent = `The ${computerChoice} beat your ${s}
                           Your score: ${humanScore}
                           Computer score: ${++computerScore}`;
    } else if((humanScore == 4) && (((s == rock) && (n == scissors)) || ((s == scissors) && (n == paper)) || ((s == paper) && (n == rock)))) { 
      txt.textContent = `you won
                         Your score: ${++humanScore}
                         Computer score: ${computerScore}`;  
   } else if((computerScore == 4) && (((n == rock) && (s == scissors)) || ((n == scissors) && (s == paper)) || ((n == paper) && (s == rock)))) {
      txt.textContent = `game over
                         Your score: ${humanScore}
                         Computer score: ${++computerScore}`;
   } 
} 



gop.addEventListener('click', (event) => {
   let humanSelection = event.target.id;
   const computerSelection = getComputerChoice();
   getComputerChoice()
   if(humanScore < 5 && computerScore < 5) {
   playRound(humanSelection, computerSelection);
   }
});



