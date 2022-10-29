const seq = <T>(...data: any[]): IterableIterator<T> => {
  let i = 0;
  let innerIndex = 0;

  return {
    [Symbol.iterator](): IterableIterator<T> {
      return this
    },

    next(): IteratorResult<T>{
      if (innerIndex === [...data[i]].length) {
        innerIndex = 0;
        i++;
      }

      if (i === data.length) {
        return {
          done: true,
          value: undefined
        }
      }

      return {
        done: false,
        value: [...data[i]][innerIndex++]
      }
    }
  };
};

console.log(...seq([1, 2], new Set([3, 4]), 'bla')); // 1, 2, 3, 4, 'b', 'l', 'a'
