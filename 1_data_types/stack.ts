class Stack<T> {
  public head: T | null = null;
  readonly limit: number;
  readonly stack: T[];
  private length = 0;

  constructor(limit: number) {
    this.limit = limit;
    this.stack = new Array(limit);
  }

  push(value: T): number {
    if (this.length === this.limit) throw Error('Exception! Array limit reached.');

    this.stack[this.length] = value;
    this.head = value;

    this.length++;

    return this.length;
  }

  pop(): T {
    if (this.length === 0) throw Error('Exception! The array is empty.');

    this.length--;

    const currentItem = this.stack[this.length];

    delete this.stack[this.length];
    this.head = this.stack[this.length - 1];

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
