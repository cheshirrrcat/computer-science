class Stack<T> {
  public head: T | null = null;
  private limit: number;
  readonly stack: T[];
  private stackLength = 0;

  constructor(limit: number) {
    this.limit = limit;
    this.stack = new Array(limit);
  }

  push(value: T) {
    if (this.stackLength === this.limit) throw Error('Exception! Array limit reached.');

    this.stack[this.stackLength] = value;
    this.head = value;

    this.stackLength++;

    return this.stack;
  }

  pop() {
    if (this.stackLength === 0) throw Error('Exception! The array is empty.');

    this.stackLength--;

    const currentItem = this.stack[this.stackLength];

    delete this.stack[this.stackLength];
    this.head = this.stack[this.stackLength - 1];

    return currentItem;
  }
}

const stack = new Stack(4);

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12

console.log(stack.pop()); // 12

console.log(stack.head);  // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
