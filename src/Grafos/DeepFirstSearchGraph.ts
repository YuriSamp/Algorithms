export {};

function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[]
): boolean {
  if (curr == needle) {
    return true;
  }
  if (seen[curr]) {
    return false;
  }
  seen[curr] = true;

  path.push(curr);

  if (curr === needle) {
    return true;
  }

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];

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
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }
  return path;
}
