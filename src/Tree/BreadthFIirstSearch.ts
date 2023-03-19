//Esse algoritmo aqui eu acho muito abstrato de entender por codigo
// Vê um video ou artigo e depois volta aqui

function bfs(head: binaryNode<number>, needle: number): boolean {
  //Aqui a gente cria uma fila
  const q = [head];

  while (q.length) {
    //A gente tira o item que visitamos da fila
    const curr = q.shift() as binaryNode<number>;
    //se ele tem o valor que estamos procurando, perfeito
    if (curr.value === needle) {
      return true;
    }
    //Caso ele não tenha, mas ele tenha filhos a gente insere ele na fila
    if (curr.left) q.push(curr.left);
    if (curr.Rigth) q.push(curr.Rigth);
  }
  //Caso a árvore não tenha o valor que estamos procurando a gente retorna retorna alguma mensagem de erro / falso / undefined....
  return false;
}
