// esse é um algoritmo que visita cada node em uma arvore, tendo 3 variações
// pre order, in order e post order, a unica diferença mesmo é como o array vai vir organizado
// Recomendo fortemente ver um video ou artigo porque é bastante abstrato por linha de codigo

//Esse aqui é o pre order
function walk(curr: binaryNode<number> | null, path: number[]): number[] {
  //Se chagmos em um ponto que não tem mais node, já podemos retornar o path
  if (!curr) {
    return path;
  }

  //Nesse caso a gente insere o node PRIMEIRO e segue para os filhos dele
  path.push(curr.value);
  //indo primeiro para esquerda
  walk(curr.left, path);
  //indo em seguidapara a direita
  walk(curr.Rigth, path);
  return path;
}

function walk_in_order(curr: binaryNode<number>, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  //Nesse caso a gente visita todas as casas a esquerda, ate não ter mais nenhuma
  walk(curr.left, path);
  // E depois voltamos inserindo as que visitamos no array
  path.push(curr.value);
  //E seguimos esse processo pra direita agora
  walk(curr.Rigth, path);
  return path;
}

function walk_post_order(curr: binaryNode<number>, path: number[]): number[] {
  if (!curr) {
    return path;
  }
  //Aqui a gente visita todos os nodes da arvóre até eles não possuirem mais nenhum filho
  walk(curr.left, path);
  walk(curr.Rigth, path);
  //Caso n tenha filhos a gente insere no array
  path.push(curr.value);
  return path;
}

function pre_order_search(head: binaryNode<number>): number[] {
  return walk(head, []);
}

function in_order_search(head: binaryNode<number>): number[] {
  return walk_in_order(head, []);
}

function post_order_search(head: binaryNode<number>): number[] {
  return walk_post_order(head, []);
}
