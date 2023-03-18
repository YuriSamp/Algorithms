//Procuro um valor dentro da arvore binaria, onde todo elemento a esquerda é menor que o elemento pai
// e todo elemento a direita é maior que o pai

function binarySearchTree(head: binaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

function search(curr: binaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }
  if (curr.value === needle) {
    return true;
  }
  if (curr.value < needle) {
    return search(curr.Rigth, needle);
  }
  return search(curr.left, needle);
}
