import Node from './node';

class Deque<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  length = 0;

  push(value: T): number {
    const newNode = new Node(value);

    this.length++;

    if (this.first === null || this.last === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }

    return this.length;
  }

  unshift(value: T): number {
    const newNode = new Node(value);

    this.length++;

    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first.prev = newNode;
      this.first = newNode;
    }

    return this.length;
  }

  pop(): Node<T> | null {
    if (this.length === 0) throw Error('Exception! The array is empty.');

    this.length--;

    const last = this.last;

    if (last !== null) {
      if (last.prev === null) {
        this.last = null;
        this.first = null;
      } else {
        this.last = last.prev;
        this.last.next = null;
      }
    }

    return last;
  }

  shift(): Node<T> | null {
    if (this.length === 0) throw Error('Exception! The array is empty.');

    this.length--;

    const first = this.first;

    if (first !== null) {
      if (first.next === null) {
        this.last = null;
        this.first = null;
      } else {
        this.first = first.next;
        this.first.prev = null;
      }
    }

    return first;
  }
}

const deque = new Deque();

deque.push(10);
deque.unshift(11);
deque.push(12);

console.log(deque.pop());   // 12
console.log(deque.shift()); // 11
console.log(deque.pop());   // 10
console.log(deque.pop());   // Exception
