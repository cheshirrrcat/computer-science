import { random } from './random';

// @ts-ignore
const randomInt = random(0, 100);

export const take = <T>(obj: IterableIterator<T>, quantity: number): IterableIterator<T> => {
  let limit = 0;

  return {
    [Symbol.iterator]() {
      return this
    },

    next(): IteratorResult<T> {
      limit++;

      return {
        done: limit > quantity,
        value: obj.next().value
      }
    }
  }
};

// console.log([...take(randomInt, 15)]);
