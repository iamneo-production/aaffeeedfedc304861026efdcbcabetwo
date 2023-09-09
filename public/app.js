// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';

let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');

let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
  // Check if the cell is already occupied
  if (cells[index] !== '') {
    return; // Cell is already occupied, do nothing
  }

  // Update the cell with the current player's symbol ('x' or 'o')
  cells[index] = currentPlayer;
  element.textContent = currentPlayer;

  // Check for winning conditions using the 'conditions' array
  for (const condition of conditions) {
    const [a, b, c] = condition;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      // Display a winning message in the 'result' element
      result.textContent = `${currentPlayer} wins!`;

      // Disable all buttons after a win
      btns.forEach(btn => btn.disabled = true);
      return;
    }
  }

  // Switch to the other player's turn
  currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

  // Update the 'result' element to indicate the current player's turn
  result.textContent = `Current player: ${currentPlayer}`;

  // Disable the clicked button to prevent further clicks on that cell
  element.disabled = true;
};

// Function to reset the game
const resetGame = () => {
  // Reset the game state
  cells = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'x';

  // Update the 'result' element to indicate the current player's turn
  result.textContent = `Current player: ${currentPlayer}`;

  // Re-enable all buttons for a new game
  btns.forEach(btn => {
    btn.disabled = false;
    btn.textContent = ''; // Clear the button text
  });
};

// Attach click event listeners to buttons
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => ticTacToe(btn, i));
});

// Attach click event listener to the reset button
document.querySelector('#reset').addEventListener('click', resetGame);