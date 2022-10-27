import { LinkedList } from '../1_data_types/linked-list';

const hashTableSize = 32;

type Key = string | number | symbol;

class HashTable {
  innerTable: Record<Key, any> = new Array(hashTableSize).fill(null);

  hashFunc(key: string) {
    let hash = Array.from(key).reduce((sum, key) => {
      return sum + key.charCodeAt(0);
    }, 0);

    return hash % hashTableSize;
  }

  set(key: Key, value: unknown) {
    const index = this.hashFunc(key.toString());
    const innerTableValue = this.innerTable[index];

    if (innerTableValue === null) {
      const list = new LinkedList();
      list.add([key, value])

      this.innerTable[index] = list;
    } else {
      innerTableValue.add([key, value]);
    }
  }

  get(key: Key) {
    const index = this.hashFunc(key.toString());
    const innerTableValue = this.innerTable[index];

    for (const item of innerTableValue) {
      if (item[0] === key) {
        return item[1];
      }
    }
  }

  keys() {
    const keysArr: Key[] = [];
    for (const item of this.innerTable[Symbol.iterator]()) {
      if (item !== null) keysArr.push(item.first.value[0]);
    }

    return keysArr;
  }
}

const hashTable = new HashTable();

hashTable.set('foo', 'bar');
hashTable.set(10, 'bla');
hashTable.set(10, '123');

console.log(hashTable.get('foo')); // 'bar'
console.log(hashTable.get(10));    // 'bla'
console.log('hashTable', hashTable);

console.log([...hashTable.keys()]);
