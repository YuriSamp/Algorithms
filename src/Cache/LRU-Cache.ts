function CreateNode<V>(value: V): node<V> {
  return { value };
}

//Essa é uma estrutura que quarda o valor que foi utilizado mais recentemente
// Existem outras estruturas de cache, mas não pretendio ir muito a fundo no tema

//Ela se comporta de forma muito parecida com uma linked list
// então vou só comentar as diferenças
class LRU<V, K> {
  private length: number;
  private head?: node<V>;
  private tail?: node<V>;

  private lookup: Map<K, node<V>>;
  private ReveseLookup: Map<node<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, node<V>>();
    this.ReveseLookup = new Map<node<V>, K>();
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key);
    if (!node) {
      node = CreateNode(value);
      this.length++;
      this.prepend(node);
      this.trimCache();
      this.lookup.set(key, node);
      this.ReveseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    const node = this.lookup.get(key);
    if (!node) {
      return undefined;
    }
    this.detach(node);
    this.prepend(node);

    return node.value;
  }

  //Esse metodo retira o item da linked list e garante que
  // o node anterior e o node posterior vão estabelecer a conexão
  // sem perder nenhuma informação na lista
  private detach(node: node<V>) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  //Metodo para colocar o item no topo da lista
  private prepend(node: node<V>) {
    //Verifica se exite algum item na lista
    if (!this.head) {
      this.head = this.head = node;
      return;
    }
    //Caso exista, troca as ligações e estabelece
    //esse novo item no topo da lista
    node.next = this.head;
    this.head.prev = node;
  }

  //Esse metodo aqui é legal, ele garante que a gente nunca exceda o tamanho do cache
  private trimCache(): void {
    //Se ainda estiver menor que a capacidade total, pode continuar
    if (this.length <= this.capacity) {
      return;
    }
    //Caso contrario a gente começa a desestruturar
    const tail = this.tail as node<V>;

    //Jogamos o ultimo item pra um limbo e diminuimos
    // o tamanho da lista pra ficar igual ao do cache
    this.detach(this.tail as node<V>);
    const key = this.ReveseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.ReveseLookup.delete(tail);
    this.length--;
  }
}
