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

  private isEmpty() {
    return this.head === null && this.tail === null;
  }

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

    const prev = this.getNode(i - 1);

    if (prev == null) {
      this.head = current;
    } else {
      prev.next = current.next;

      if (current.next === null) {
        this.tail = prev;
      }
    }
    this.length--;

    // if (i == 0) {
    //   this.head = this.head!.next;
    //   this.length--;
    //   return;
    // }

    // const prev = this.get(i - 1);
  }
}
