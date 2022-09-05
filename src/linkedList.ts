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

  private isEmpty() {
    return this.head === null && this.tail === null;
  }

  get length() {
    let node = this.head;

    let i = 0;
    while (node !== null) {
      node = node.next;
      i++;
    }

    return i;
  }

  push(val: string) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
  }

  pop() {
    if (this.isEmpty()) {
    } else {
      this.tail = null;
    }
  }

  get(index: number) {
    let node = this.head;

    let i = 0;
    while (node && i < index) {
      node = node.next;
      i++;
    }

    return node && node.value;
  }

  delete() {}
}
