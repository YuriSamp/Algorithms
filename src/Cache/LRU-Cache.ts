function CreateNode<V>(value: V): node<V> {
  return { value };
}

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

  private prepend(node: node<V>) {
    if (!this.head) {
      this.head = this.head = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }
    const tail = this.tail as node<V>;
    this.detach(this.tail as node<V>);
    const key = this.ReveseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.ReveseLookup.delete(tail);
    this.length--;
  }
}
