import Node from './node';

class LinkedList<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
    listLength = 0;

  add(value: T) {
    let newNode;

    this.listLength += 1;

    if (this.first === null || this.last === null) {
      newNode = new Node(value);
      this.first = newNode;
      this.last = newNode;
      return newNode;
    }

    newNode = new Node(value);
    newNode.next = null;
    newNode.prev = this.last;

    this.last.next = newNode;
    this.last = newNode;

    return newNode;
  }

  [Symbol.iterator]() {
    let current = this.first;
    let iteration = 0;
    const listLength = this.listLength;

    return {
      next() {
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
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list?.first?.value);
console.log(list?.last?.value);
console.log(list?.first?.next?.value);
console.log(list?.first?.next?.prev?.value);
console.log(list.listLength);

for (const item of list) {
  console.log("item", item);
}
