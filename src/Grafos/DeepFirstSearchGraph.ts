export {};

//Esse algoritmo usa de recursão para acharmos o valor que a gente ta a procura,
//da uma olhada nos links que deixei de referencia caso não entenda desse tópico

function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]
): boolean {
  //Caso a gente visite um node que ja visitamos, deu algum problema
  if (seen[curr]) {
    return false;
  }
  //Node novo que a gente n visitou, a gente chega nele e marca nosso territorio
  seen[curr] = true;

  //Manda ele pra dentro do nosso array
  path.push(curr);

  //Se o valor que a gente ta procurando esta no nosso node, perfeito
  if (curr === needle) {
    return true;
  }

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    //Chamamos a propria função recursivamente pra colocar o proximo node no array
    if (walk(graph, edge.to, needle, seen, path)) {
      path.push(edge.to);
      return true;
    }
  }

  path.pop();
  return false;
}

function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null {
  //Criamos a estrutura e chamamos a função
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }
  //Retornamos o caminho que andamos
  return path;
}
