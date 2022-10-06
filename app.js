////////////////////////////////
// Global Variables Here
let playerBlue = 'Blue'
let playerRed = 'Red'
let playerTurn = playerBlue
let winnerPlayer = false
let board
let columns = 7
let rows = 6
let columnIndex

const startGame = document.getElementById('play')

gameStart = () => {
  board = []
  columnIndex = [
    rows - 1,
    rows - 1,
    rows - 1,
    rows - 1,
    rows - 1,
    rows - 1,
    rows - 1
  ]
  startGame.style.visibility = `hidden`

  for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
      // Js operator to assign value of ` ` so we can further use that as an indicator to be able to add pieces.
      row.push(' ')
      // creates the board in HTML to avoid making all 42 tiles individually, it also adds the class and ID for each tile on board, starting on tile 0-0 on the top left of board and ending 5-6 on bottom right and the event listener for the tile to be clicked
      let tile = document.createElement('div')
      tile.id = r.toString() + `-` + c.toString()
      tile.classList.add(`tile`)
      tile.addEventListener(`click`, setPiece) //adds and event listener to each tile so when you click it indicates that column
      document.getElementById(`board`).append(tile)
    }
    board.push(row)
  }
}
setWinner = (r, c) => {
  let winner = document.getElementById('winner')
  if (board[r][c] === playerBlue) {
    winner.innerText = `${playerBlue} Wins`
  } else {
    winner.innerText = `${playerRed} Wins`
  }
  winnerPlayer = true
}

checkWinner = () => {
  // starting from 0-0 horizontal winning condition -3 on columns cause no point in checking beyond the boundaries of connect 4
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != ' ') {
        if (
          board[r][c] === board[r][c + 1] &&
          board[r][c + 1] === board[r][c + 2] &&
          board[r][c + 2] === board[r][c + 3]
        ) {
          setWinner(r, c)
          return
        }
      }
    }
  }

  // same concept but with the rows - 3 instead of columns for vertical win condition
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (board[r][c] != ' ') {
        if (
          board[r][c] === board[r + 1][c] &&
          board[r + 1][c] === board[r + 2][c] &&
          board[r + 2][c] === board[r + 3][c]
        ) {
          setWinner(r, c)
          return
        }
      }
    }
  }

  // diagonal upwards checking as goin up the stairs
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != ' ') {
        if (
          board[r][c] === board[r + 1][c + 1] &&
          board[r + 1][c + 1] === board[r + 2][c + 2] &&
          board[r + 2][c + 2] === board[r + 3][c + 3]
        ) {
          setWinner(r, c)
          return
        }
      }
    }
  }

  // diagonal  downwards same deal but we goin with negatives in the row to go down the stairs
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != ' ') {
        if (
          board[r][c] === board[r - 1][c + 1] &&
          board[r - 1][c + 1] === board[r - 2][c + 2] &&
          board[r - 2][c + 2] === board[r - 3][c + 3]
        ) {
          setWinner(r, c)
          return
        }
      }
    }
  }
}

setPiece = () => {
  //Checks if winner is true to avoid adding pieces if game is done
  if (winnerPlayer) {
    return
  }

  //get coords of that tile clicked
  let coords = this.attributes.id.value
  console.log(coords)

  let r = 2 //parseInt(coords[0])document.querySelector("#\\30 -0")document.querySelector("#\\30 -5")
  let c = 2 //parseInt(coords[1])

  // Changes the value of r to the height of that column so it drops in the proper spot
  r = columnIndex[c]

  if (r < 0) {
    return //means column is full so return from function
  }

  board[r][c] = playerTurn //update the tile to the class of the current player
  let tile = document.getElementById(r.toString() + `-` + c.toString())
  if (playerTurn === playerBlue) {
    tile.classList.add('blue-piece')
    playerTurn = playerRed
  } else {
    tile.classList.add('red-piece')
    playerTurn = playerBlue
  }

  r -= 1 //update the row height for that column, signifying one more element inside
  columnIndex[2] = r //update the array height

  checkWinner()
}

//Event call for button to start game
startGame.addEventListener(`click`, gameStart)
