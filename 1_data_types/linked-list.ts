import Node from './node';

type IteratorResult<T> = {
  done: boolean;
  value: T | undefined;
}
type IterableIterator<T> = {
  [Symbol.iterator](): IterableIterator<T>;
  next(): IteratorResult<T>
};

export class LinkedList<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  length = 0;

  add(value: T) {
    const newNode = new Node(value);

    this.length += 1;

    if (this.first === null || this.last === null) {
      this.first = newNode;
      this.last = newNode;
    }

    newNode.next = null;
    newNode.prev = this.last;

    this.last.next = newNode;
    this.last = newNode;
  }

  values(): IterableIterator<T> {
    let current = this.first;
    let iteration = 0;
    const listLength = this.length;

    return {
      [Symbol.iterator]() {
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

        current = current.next;

        return {
          done,
          value
        };
      }
    };
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  reverse(): IterableIterator<T> {
    let current = this.last;
    let iteration = this.length;

    return {
      [Symbol.iterator]() {
        return this
      },

      next(): IteratorResult<T> {
        const value = current?.value;
        const done = iteration === 0;

        iteration--;

        if (current) current = current.prev;

        return {
          done,
          value
        }
      }
    }
  }
}

// const list = new LinkedList();
//
// list.add(1);
// list.add(2);
// list.add(3);
//
// console.log(list?.first?.value);
// console.log(list?.last?.value);
// console.log(list?.first?.next?.value);
// console.log(list?.first?.next?.prev?.value);
// console.log(list.length);
//
// for (const item of list) {
//   console.log("item", item);
// }
//
// console.log(...list.reverse());
