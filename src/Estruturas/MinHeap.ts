//essa estrutura junto com linked list é bem complicada de entender então sugiro procurar um video
// ou artigo pra ver melhor ela, depois vem aqui no código, de novo não vou comentar porque
// não me sinto a vontade o suficiente pra conseguir ensinar isso a alguem

class MinHeap {
  private length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapfyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      const out = this.data[0];
      this.data = [];
      return out;
    }
    this.data[0] = this.data[this.length];
    this.heapfyDown(0);
    return out;
  }

  private heapfyDown(idx: number): void {
    if (idx >= this.length) {
      return;
    }
    const lIdx = this.data[this.leftChild(idx)];
    const RIdx = this.data[this.RigthChild(idx)];

    if (lIdx >= this.length) {
      return;
    }

    const LV = this.data[lIdx];
    const RV = this.data[RIdx];
    const v = this.data[idx];

    if (LV > RV && v > RV) {
      this.data[idx] = RV;
      this.data[RV] = v;
      this.heapfyDown(RIdx);
    } else if (RV > LV && v > LV) {
      this.data[idx] = LV;
      this.data[LV] = v;
      this.heapfyDown(lIdx);
    }
  }

  private heapfyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];

    if (parentV > v) {
      this.data[idx] = parentV;
      this.data[p] = v;
      this.heapfyUp(p);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private RigthChild(idx: number): number {
    return idx * 2 + 2;
  }
}
