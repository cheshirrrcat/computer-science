import Node from "./node";

class Queue<T> {
  head: T | null = null;
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  listLength = 0;

  push(...value: T[]) {
    value.forEach((item) => {
      const newNode = new Node(item);

      this.listLength++;

      if (this.first === null || this.last === null) {
        this.first = newNode;
        this.last = newNode;
        this.head = newNode.value;
      } else {
        newNode.prev = this.last;
        newNode.next = null;

        this.last.next = newNode;
        this.last = newNode;
      }

      return newNode;
    });
  }

  pop() {
    const prevValue = this.head;

    if (prevValue === null) throw Error('Exception! The array is empty.');

    this.listLength--;

    if (this.first !== null && this.first.next !== null) {
      this.first = this.first.next;
      this.first.prev = null;
      this.head = this.first.value;
    } else {
      this.first = null;
      this.last = null;
      this.head = null;
    }

    return prevValue;
  }
}

const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10

console.log(queue.pop()); // 10

console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
