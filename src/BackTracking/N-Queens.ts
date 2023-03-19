//Casas no nosso tabuleiro, no caso seria 8x8
const N = 8;

// Printa o tabuleiro
function printSolution(board: number[][]): void {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) console.log(board[i][j] + ' ');
  }
}

// Essa função vai checar se a posição é segura ou não pra colocar uma rainha
function isSafe(board: number[][], row: number, col: number): boolean {
  // checa essa linha do tabuleiro para a esqurda
  for (let i = 0; i < col; i++) {
    if (board[row][i] == 1) return false;
  }

  // Checa a diagonal superior ao lado esquerdo
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Checa a diagonal inferior ao lado esquerdo
  for (let i = row, j = col; j >= 0 && i < N; i++, j--) {
    if (board[i][j]) return false;
  }

  return true;
}

// A função que de fato resolve o nosso problema
function solveNQueen(board: number[][], col: number): boolean {
  if (col >= N) return true;

  //Aqui a gente vai fazer um loop pelo tabuleiro
  for (let i = 0; i < N; i++) {
    //Se encontrar-mos uma posição segura, a gente coloca a nossa rainha
    if (isSafe(board, i, col)) {
      board[i][col] = 1;

      // vai para a proxima coluna e verifica se tem como colocar a rainha
      if (solveNQueen(board, col + 1)) return true;

      //Caso não tenha como colocar a rainha a gente volta pro começo
      board[i][col] = 0;
    }
  }
  //Caso a gente n consiga colocar ela em nenhum lugar dessa linha, a gente retorna false
  return false;
}
