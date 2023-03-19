type Node<T> = {
  value: T;
  next?: Node<T>;
};

//Isso é uma fila de tarefas , onde o ultimo item a entrar é o último item a sair, faz sentido?

export default class Queue<T> {
  private length: number;
  private head?: Node<T>;
  private tail?: Node<T>;
  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  // Aqui a gente adiciona um item a fila
  enqueue(item: T): void {
    //Aumentamos o valor da fila
    const node = { value: item } as Node<T>;
    this.length++;

    //Caso a fila estiver vazia, maravilha, nosso item se torna o primeiro da fila
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    //Caso ela não esteja vazia, adicionamos o node com o valor no final da fila
    this.tail.next = node;
    this.tail = node;
  }

  //Aqui a gente tira um item da fila
  deque(): T | undefined {
    //Caso a fila esteja vazia, nesse caso não tem nada a retornar
    if (!this.head) {
      return undefined;
    }

    //Caso ela não esteja vazia, a gente reduz o tamanho dela
    this.length--;
    const head = this.head;

    //No caso da fila ter somente 1 item, o tail volta a ser undefined
    if (this.length === 0) {
      this.tail === undefined;
    }

    // Aqui rearranjamos o valor que ta no topo e retornamos ele
    this.head = this.head?.next;
    return head.value;
  }

  //Aqui a gente só mostra o valor que está em primeiro da fila, caso ele exista
  peek(): T | undefined {
    return this.head?.value;
  }
}
