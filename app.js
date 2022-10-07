////////////////////////////////
// Global Variables Here
let playerBlue = 'Blue'
let playerRed = 'Red'
let playerTurn = playerBlue
let winnerPlayer = false
let playerName
let board
let coords
let columns = 7
let rows = 6
let columnIndex = []

const startGame = document.getElementById(`play`)
let welcomeBanner = document.querySelector(`.welcome`)
let playerId = document.getElementById(`player`)

playerInput = () => {
  playerName = prompt(`What is your name?`)

  //Ask name and confirms name
  while (confirm(`${playerName}, is this correct???`) === false) {
    playerName = prompt(`What is your name?`)
  }

  alert(`Welcome to Gotham, ${playerName}!!! Good luck, you will need it!!`)

  playerId.innerText = playerName

  welcomeBanner.style.visibility = `visible`
}

//Event call for button to start game
startGame.addEventListener(`click`, playerInput)
