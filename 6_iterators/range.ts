export class Range<T extends string | number> {
  protected start: number;
  protected end: number;
  protected type: 'number' | 'string';

  constructor(start: T, end: T) {
      this.type = typeof start === 'number' ? 'number' : 'string';

      this.start = typeof start === 'number' ? start : start.toString().charCodeAt(0);
      this.end = typeof end === 'number' ? end : end.toString().charCodeAt(0);
  }

  [Symbol.iterator]() {
    let i = this.start - 1;
    const end = this.end;
    const type = this.type;

    return {
      [Symbol.iterator]() {
        return this
      },
      next() {
        if (i < end) {
          i++;

          return {
            done: false,
            value: type === 'number' ? i : String.fromCharCode(i)
          }
        }

        return {
          done: true,
          value: undefined
        }
      }
    }
  }

  reverse() {
    let i = this.end + 1;
    const start = this.start;
    const type = this.type;

    return {
      [Symbol.iterator]() {
        return this
      },
      next() {
        if (i > start) {
          i--;

          return {
            done: false,
            value: type === 'number' ? i : String.fromCharCode(i)
          }
        }

        return {
          done: true,
          value: undefined
        }
      }
    }
  }
}

const symbolRange = new Range('a', 'f');
const numberRange = new Range(-5, 1);

console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]
