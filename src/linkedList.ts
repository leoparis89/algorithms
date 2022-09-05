export class Node {
  next: Node | null = null;
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
export class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  length = 0;

  //   get length() {
  //     let node = this.head;

  //     let i = 0;
  //     while (node !== null) {
  //       node = node.next;
  //       i++;
  //     }

  //     return i;
  //   }

  push(val: string) {
    const node = new Node(val);
    this.length++;
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(index: number) {
    if (index >= this.length) return null;

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node!.next;
    }

    return node;
  }

  get(index: number) {
    let node = this._find(index);
    return node && node.value;
  }

  delete(i: number) {
    // Special case for i === 0
    if (i === 0) {
      const node = this.head;
      if (node) {
        this.head = node.next;

        if (this.head === null) {
          this.tail = null;
        }

        this.length--;
        return node.value;
      } else {
        return null;
      }
    }

    const node = this._find(i - 1);
    const excise = node && node.next;

    if (excise === null) return null;

    node!.next = excise.next;

    if (node!.next === null) {
      this.tail = node;
    }

    this.length--;
    return excise!.value;
  }
}
