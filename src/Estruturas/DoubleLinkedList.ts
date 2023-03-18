class DoubleLinkedList<T> {
  private length: number;
  private head?: node<T>;
  private tail?: node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as node<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw Error('deu merda chefia');
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr?.next;
    }
    curr = curr as node<T>;
    const node = { value: item } as node<T>;
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if (node.prev) {
      node.prev.next = curr;
    }
  }

  append(item: T): void {
    const node = { value: item } as node<T>;
    this.length++;
    if (!this.tail) {
      this.head = this.tail = undefined;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) {
      return undefined;
    }
    this.RemoveNode(curr);
  }

  get(index: number): T | undefined {
    const node = this.getAt(index);
    return node?.value;
  }

  removeAt(index: number): T | undefined {
    const node = this.getAt(index);
    if (!node) {
      return undefined;
    }
    return this.RemoveNode(node);
  }

  private RemoveNode(node: node<T>): T | undefined {
    this.length--;
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    node.next = node.prev = undefined;
    return node.value;
  }

  private getAt(index: number): node<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }
}
