import {random} from "./random";
import {take} from "./take";

const randomInt = random(0, 100);

const enumerate = <T>(obj: IterableIterator<T>): IterableIterator<[number, T]> => {
  let iterator = 0;

  return {
    [Symbol.iterator]() {
      return this
    },

    next(): IteratorResult<[number, T]> {
      return {
        done: false,
        value: [iterator++, obj.next().value]
      }
    }
  }
}

console.log([...take(enumerate(randomInt), 3)]); // [[0, ...], [1, ...], [2, ...]]
