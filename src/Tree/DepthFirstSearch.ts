//Procuro um valor dentro da arvore binaria, onde todo elemento a esquerda é menor que o elemento pai
// e todo elemento a direita é maior que o pai

function dfs(head: binaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

function search(curr: binaryNode<number> | null, needle: number): boolean {
  //Caso o head não exista, não tem nem onde procurar
  if (!curr) {
    return false;
  }

  //Se a gente ja esta no node que estamos procurando, tudo certo
  if (curr.value === needle) {
    return true;
  }

  //Se o valor que a gente procura é maior que o valor do node que a gente ta, precisamos ir pra direita
  if (curr.value < needle) {
    return search(curr.Rigth, needle);
  }

  //Se o valor que a gente procura é menor que o valor do node que a gente ta, precisamos ir pra esquerda
  return search(curr.left, needle);
}
