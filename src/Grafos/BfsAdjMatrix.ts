//Bfs em uma matrix adjacente, o nome assusta, mas é mais tranqulo do que parece

function bfsAdjMatrix(
  graph: number[][],
  source: number,
  needle: number
): number[] {
  //A gente precisa de 2 coisas, um array com os itens que a gente ja viu
  const seen = new Array(graph.length).fill(false);
  // E um array com os nodes anterior ao nosso atual
  const prev = new Array(graph.length).fill(-1);

  //O lugar que a gente começa a gente marca como true e segue
  seen[source] = true;
  const q: number[] = [source];

  //Essa parte aqui eu excplico melhor no BFS da Tree, da uma olhada la
  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) {
        continue;
      }
      if (seen[i]) {
        continue;
      }
      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  } while (q.length);

  // Aqui a gente só ta estruturando o que vamos devolver por nosso usuario
  let curr = needle;
  const out: number[] = [];

  // Montamos um array com o caminho que precorremos
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }
  //E se ele esse caminho existir de fato, a gente retorna ele pro usuario
  if (out.length) return [source].concat(out.reverse());
  //Se não a gente retorna um array vazio
  return [];
}
