//Casas no nosso tabuleiro, no caso seria 8x8
const N = 8;

function printSolution(board: number[][]): void {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) console.log(board[i][j] + ' ');
    console.log();
  }
}

// function to check whether the position is safe or not
function isSafe(board: number[][], row: number, col: number): boolean {
  // Check this row on left side
  for (let i = 0; i < col; i++) {
    if (board[row][i] == 1) return false;
  }

  // Check upper diagonal on left side
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Check lower diagonal on left side
  for (let i = row, j = col; j >= 0 && i < N; i++, j--) {
    if (board[i][j]) return false;
  }

  return true;
}

// The function that solves the problem using backtracking
function solveNQueen(board: number[][], col: number): boolean {
  if (col >= N) return true;

  for (let i = 0; i < N; i++) {
    //if it is safe to place the queen at position i,col -> place it
    if (isSafe(board, i, col)) {
      // Place this queen in board[i][col]
      board[i][col] = 1;

      // recur to place rest of the queens
      if (solveNQueen(board, col + 1)) return true;

      //backtrack if the above condition is false
      board[i][col] = 0;
    }
  }
  // if the queen can not be placed in any row in
  // this column col then return false
  return false;
}
