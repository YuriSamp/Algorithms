//Comparo 2 arvorés binarias indo node a node

function CompareBinaryTree(
  a: binaryNode<number> | null,
  b: binaryNode<number> | null
): boolean {
  //Caso ambos os nodes sejam null, perfeito, suas árvores são iguais
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.value !== b.value) {
    return false;
  }
  return (
    CompareBinaryTree(a.left, b.left) && CompareBinaryTree(b.Rigth, b.left)
  );
}
