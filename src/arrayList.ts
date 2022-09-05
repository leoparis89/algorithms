export class ArrayList {
  data = {};
  length = 0;

  push(el) {
    this.data[this.length] = el;
    this.length++;
  }

  pop() {
    let res = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return res;
  }

  get(i: number) {
    return this.data[i];
  }

  delete(i: number) {
    delete this.data[i];
    for (let j = i; j < this.length - 1; j++) {
      this.data[j] = this.data[j + 1];
    }
    this.pop();
  }
}
