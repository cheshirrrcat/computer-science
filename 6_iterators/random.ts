export const random = (min: number, max: number): IterableIterator<number> => {
  return {
    [Symbol.iterator](): IterableIterator<number> {
      return this
    },

    next(): IteratorResult<number> {

      return {
        done: false,
        value: Math.floor(Math.random() * (max - min) + min)
      }
    }
  }
};

// const randomInt = random(0, 100);

// console.log(randomInt.next());
// console.log(randomInt.next());
// console.log(randomInt.next());
// console.log(randomInt.next());
