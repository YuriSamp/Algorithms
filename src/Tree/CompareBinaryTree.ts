//Esse algoritmo compara 2 arvores binarias ou mais, é mais facil do que parece

function CompareBinaryTree(
  a: binaryNode<number> | null,
  b: binaryNode<number> | null
): boolean {
  //Caso ambos os nodes sejam null, perfeito, suas árvores são iguais
  if (a === null && b === null) {
    return true;
  }

  //Caso algum deles seja null mas o outro não, tem algo errado, elas não são iguais
  if (a === null || b === null) {
    return false;
  }

  //Se o valor de cada node não for igual, as arvores também não são iguais
  if (a.value !== b.value) {
    return false;
  }

  //Chama a função recursiva pra varrer o resto da árvore
  return (
    CompareBinaryTree(a.left, b.left) && CompareBinaryTree(b.Rigth, b.left)
  );
}
