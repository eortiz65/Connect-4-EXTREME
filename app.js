////////////////////////////////
// Global Variables Here
let playerBlack = 'Black'
let playerBlue = 'Blue'
let playerTurn = playerBlack
let winner = false
let count
let columns = 7
let rows = 6
let columnIndex = []

const message = document.getElementById('message')
const playAgain = document.getElementById('play')

window.onload = () => {
  gameStart()
}

// playAgain.addEventListener(`click`, gameStart)

setPiece = () => {
  if (winner) {
    return
  }
}

gameStart = () => {
  board = []
  columnIndex = [5, 5, 5, 5, 5, 5, 5]

  for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
      // Js operator to assign value of ` ` for allowing game pieces to be added in the column
      row.push(' ')
      // creates the board in HTLM to avoid making all 42 tiles individually
      let tile = document.createElement('div')
      tile.id = r.toString() + '-' + c.toString()
      tile.classList.add('tile')
      tile.addEventListener('click', addPiece)
      document.getElementById('board').append(tile)
    }
    board.push(row)
  }
}

addPiece = () => {
  if (winner) {
    return
  }

  //get coords of that tile clicked
  let coords = this.id.split('-')
  let r = parseInt(coords[0])
  let c = parseInt(coords[1])

  // figure out which row the current column should be on
  r = columnIndex[c]

  if (r < 0) {
    // board[r][c] != ' '
    return
  }

  board[r][c] = currPlayer //update JS board
  let tile = document.getElementById(r.toString() + '-' + c.toString())
  if (currPlayer == playerBlack) {
    tile.classList.add('black-piece')
    currPlayer = playerBlue
  } else {
    tile.classList.add('black-piece')
    currPlayer = playerBlack
  }

  r -= 1 //update the row height for that column
  columnIndex[c] = r //update the array

  checkWinner()
}
