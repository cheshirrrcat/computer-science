const zip = <T>(...data: any[]): IterableIterator<T[]> => {
  let i = 0;

  return {
    [Symbol.iterator](): IterableIterator<T[]> {
      return this
    },

    next(): IteratorResult<T[]> {
      const arr: T[] = [];

      if (i < 2) {
        let j = 0;

        while(j < data.length) {
          arr.push([...data[j]][i]);

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
        value: arr
      }
    }
  };
};

console.log(...zip([1, 2], new Set([3, 4]), 'bl')); // [[1, 3, b], [2, 4, 'l']]
