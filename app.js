// const computerChoiceDisplay=document.getElementById('computer-choice')
// const userchoicedisplay=document.getElementById('user-choice')
// const resultdisplay=document.getElementById('result')
// let userchoices
// let computerChoice
// let result
// const possibleChoice=document.querySelectorAll('button');

// possibleChoice.forEach(pc=>pc.addEventListener('click',(e)=>{
//     userchoices=e.target.id
//     userchoicedisplay.innerHTML=userchoices
//     generateComputerChoice()
//     getResult()
// }))
// // getResult();
// generateComputerChoice=()=>{
//     const randomNumber=Math.floor(Math.random()*3)+1;
//     if(randomNumber == 1){
//         computerChoice='rock'
//     }
//     if (randomNumber ==2) {
//         computerChoice='paper'
//     }
//     if(randomNumber==3){
//         computerChoice='scissors'
//     }
//     computerChoiceDisplay.innerHTML=computerChoice
// }

//  function getResult(){
//     if(computerChoice===userchoices){
//         result='its a draw'
//     }
//     if (computerChoice==='rock' && userchoices ==="paper") {
//         result='you win'
//     }
//     if (computerChoice==='rock' && userchoices ==="scissors") {
//         result='you lost'
//     }
//     if (computerChoice==='paper' && userchoices ==="scissors") {
//         result='you win'
//     }
//     if (computerChoice==='paper' && userchoices ==="rock") {
//         result='you lose'
//     }
//     if (computerChoice==='scissors' && userchoices ==="paper") {
//         result='you lose'
//     }
//     if (computerChoice==='scissors' && userchoices ==="rock") {
//         result='you win'
//     }
//     resultdisplay.innerHTML=result
// }
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}