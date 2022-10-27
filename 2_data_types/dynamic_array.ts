import Node from '../1_data_types/node';
type IteratorResult<T> = {
  done: boolean;
  value: T[] | undefined;
}
type IterableIterator<T> = {
  [Symbol.iterator](): IterableIterator<T>;
  next(): IteratorResult<T>
};


class DynamicArray<T> {
  first: Node<T[]>;
  last: Node<T[]>;
  limit: number;
  arraysNumber = 0;
  length = 0;
  arrIndex = 0;

  constructor(limit: number) {
    this.limit = limit;
    this.first = new Node(new Array(limit));
    this.last = new Node(new Array(limit));
    this.arraysNumber++;
  }

  [Symbol.iterator](){
    return this.values();
  }

  add(value: T) {
    if (!this.last.prev) this.first.value[this.arrIndex] = value;
    this.last.value[this.arrIndex] = value;
    this.arrIndex++;
    this.length++;

    if (this.arrIndex === this.limit) {
      const newNode = new Node(new Array(this.limit));
      const lastNode = this.last;

      if (!this.last.prev) this.first.next = newNode;

      this.last.next = newNode;
      this.last = newNode;
      this.last.prev = lastNode;
      this.arrIndex = 0;
      this.arraysNumber++;
    }
  }

  get(value: number) {
    let quotient = Math.floor(value/this.limit);
    const index = (value % this.limit);
    let currentArray = this.first;

    while (quotient > 0 && currentArray.next !== null) {
      currentArray = currentArray.next;
      quotient--;
    }

    return currentArray.value[index];
  }

  values():IterableIterator<T> {
    let current = this.first;
    let iteration = 0;
    const listLength = this.arraysNumber;

    return {
      [Symbol.iterator](){
        return this;
      },

      next(): IteratorResult<T> {
        const value = current?.value;
        const done = iteration++ >= listLength;

        if (current === null) {
          return {
            done: true,
            value: undefined
          };
        }

        if (current.next) current = current.next;

        return {
          done,
          value
        };
      }
    }
  }
}

const arr = new DynamicArray(3);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log(arr.length);  // 5

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5

// for (const item of arr) {
//   console.log(item);
// }
