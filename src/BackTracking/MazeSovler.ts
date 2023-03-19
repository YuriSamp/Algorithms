// Esse array é só pra definir as direções, cima direita baixo esquerda

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  //Esse primeiro if monstruoso aqui, chega se a gente está dentro do labirinto ou não, pq se a gente sair dele perdemos toda
  // a referencia de onde andar
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze[0].length
  ) {
    return false;
  }

  //Se a gente estiver em cima de uma parede, deu algum problema
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  //Caso a gente chegue no final do labirinto, tudo certo, conseguirmos alcançar nosso objetivo
  if (curr.x === end.x || curr.y === end.y) {
    path.push(end);
    return true;
  }

  //Se a gente ja visitou essa casa, melhor retornar e ir por outro caminho
  if (seen[curr.y][curr.x]) {
    return false;
  }

  //se a gente chegou nesse lugar, a gente ainda não viu ele
  // e ele também não é o fim, bota ele como true no array e continua procurando
  seen[curr.y][curr.x] = true;
  path.push(curr);

  //Verifica cada uma das 4 direções possiveis que a gente pode ir e se tiver alguma, a gente vai pra ess direção
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  //Se não tem nenhuma direção pra onde podemos ir, a gente chegou em um beco sem saida
  // Tira esse caminho do nosso array e vamos continuar a jornada
  path.pop();
  return false;
}

//Aqui é a função que de fato vai retornar nossa reposta
export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  //A gente cria um array com todos os index como false, pq a gente ainda n visitou nenhum deles
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  //Usamos a função que definimos lá em cima pra andar pelo labirinto
  walk(maze, wall, start, end, seen, path);

  //Retornamos um array com o caminho para a saida do labirinto
  return path;
}
