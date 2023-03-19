type Node<T> = {
  value: T;
  prev: Node<T>;
};

//Isso é uma pilha de tarefas , onde o ultimo item a entrar - Ou tarefa mais urgente -  é o primeiro a sair, faz sentido?

export default class stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  //Aqui você adiciona um item da sua pilha de tarefas
  push(item: T): void {
    const node = { value: item } as Node<T>;

    //A gente precisa aumentar o tamanho da pilha
    this.length++;

    //Caso a pilha esteja vazia, o que você acabou de inserir se torna o primeiro item dela, aqui chamado de HEAD
    if (this.head === undefined) {
      this.head == node;
      return;
    }

    //Aqui a gente define que o novo item inserido é o item ao topo da pilha
    node.prev = this.head;
    this.head = node;
  }

  //Aqui você retira um item da sua pilha de tarefas
  pop(): T | undefined {
    //Tem que reduzir o tamanho da pilha
    this.length = Math.max(0, this.length - 1);

    //Caso sua pilha estiver vazia, tem que retornar undefined
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    //Aqui ele retira o seu item da pilha e atribui o HEAD ao item abaixo
    const head = this.head as Node<T>;
    this.head = this.head?.prev;
    return head.value;
  }

  // Só retorna o valor do HEAD, ou a tarefa que está ao topo da pilha
  peek(): T | undefined {
    return this.head?.value;
  }
}
