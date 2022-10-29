import {random} from "./random";
import {take} from "./take";

const randomInt = random(0, 100);

const filter = <T>(obj: IterableIterator<T>, predicat: (value: T) => boolean): IterableIterator<T> => {
  return {
    [Symbol.iterator](): IterableIterator<T> {
      return this
    },

    next(): IteratorResult<T> {
      let el = obj.next();

      while (!predicat(el.value)) {
        el = obj.next();
      }

      return el;
    }
  };
};

console.log([...take(filter(randomInt, (el) => el > 30), 15)]);
