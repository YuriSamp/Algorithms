function bfs(head: binaryNode<number>, needle: number): boolean {
  const q = [head];

  while (q.length) {
    const curr = q.shift() as binaryNode<number>;
    if (curr.value === needle) {
      return true;
    }
    if (curr.left) q.push(curr.left);
    if (curr.Rigth) q.push(curr.Rigth);
  }
  return false;
}
