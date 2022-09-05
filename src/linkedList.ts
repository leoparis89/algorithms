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

  getNode(index: number) {
    let node = this.head;

    let i = 0;
    while (node && i < index) {
      node = node.next;
      i++;
    }

    return node;
  }

  get(index: number) {
    let node = this.getNode(index);
    return node && node.value;
  }

  delete(i: number) {
    const current = this.getNode(i);

    if (current === null) {
      return null;
    }

    if (i === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        return null;
      }
    }

    const prev = this.getNode(i - 1);
    if (prev == null) {
      this.head = current.next;
    } else {
      prev.next = current.next;
    }

    if (current.next === null) {
      this.tail = prev;
    }

    this.length--;
    return current.value;
  }
}
