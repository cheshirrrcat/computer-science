const mapSeq = <T>(numbers: number[], cb: Function[]): IterableIterator<T> => {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return this
    },

    next(): IteratorResult<T> {
      let number;

      if (i < numbers.length) {
        let j = 0;
        number = numbers[i];

        while(j < cb.length) {
          number = cb[j](number);

          j++;
        }

        i++;
      } else {
        return {
          done: true,
          value: undefined
        }
      }

      return {
        done: false,
        value: number
      }
    }
  };
};

console.log(...mapSeq([1, 2, 3], [(el: number) => el * 2, (el: number) => el - 1])); // [1, 3, 5]
