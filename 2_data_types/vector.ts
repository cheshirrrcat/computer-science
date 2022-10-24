class Vector<T> {
  capacity: number;
  length: number = 0;
  buffer: T[] = [];

  constructor(capacity: number = 2) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
  }

  add(value: T) {
    if (this.length === this.capacity) {
      const newArray = this.buffer.concat(new Array(this.capacity));

      this.capacity = this.capacity * 2;
      this.buffer = newArray;
    }

    this.buffer[this.length] = value;

    this.length++;
  }

  get(index: number) {
    return this.buffer[index];
  }
}

const vector = new Vector(2);

vector.add(1);
vector.add(2);
vector.add(3);
vector.add(4);
vector.add(5);

console.log(vector);

console.log(vector.get(0));  // 1
console.log(vector.get(1));  // 2
console.log(vector.get(4));  // 5
