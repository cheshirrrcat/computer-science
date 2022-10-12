import Node from './node';

class Deque<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  listLength = 0;

  push(value: T) {
    const newNode = new Node(value);

    this.listLength++;

    if (this.first === null || this.last === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }

    return newNode;
  }

  unshift(value: T) {
    const newNode = new Node(value);

    this.listLength++;

    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first.prev = newNode;
      this.first = newNode;
    }

    return newNode;
  }

  pop() {
    if (this.listLength === 0) throw Error('Exception! The array is empty.');

    this.listLength--;

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

  shift() {
    if (this.listLength === 0) throw Error('Exception! The array is empty.');

    this.listLength--;

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
