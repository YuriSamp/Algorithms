// A UNICA COISA QUE MUDA É A ORDEM QUE O NODE É INSERIDO NO ARRAY

function walk(curr: binaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  path.push(curr.value);
  walk(curr.left, path);
  walk(curr.Rigth, path);
  return path;
}

function walk_in_order(curr: binaryNode<number>, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.Rigth, path);
  return path;
}

function walk_post_order(curr: binaryNode<number>, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  walk(curr.left, path);
  walk(curr.Rigth, path);
  path.push(curr.value);
  return path;
}

function pre_order_search(head: binaryNode<number>): number[] {
  return walk(head, []);
}

function in_order_search(head: binaryNode<number>): number[] {
  return walk(head, []);
}

function post_order_search(head: binaryNode<number>): number[] {
  return walk(head, []);
}
