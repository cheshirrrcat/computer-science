function StructureViaFunction(scheme: string[]) {
  const data = new Array(scheme.length);
  const index = new Array(...scheme);

  const res: {
    set: (key: string, value: unknown) => void,
    get: (value: string) => string,
  } = {
    set(key, value) {
      data[index.indexOf(key)] = value;
    },
    get(key) {
      return data[index.indexOf(key)];
    },
  };

  return res;
}

const blackJack = StructureViaFunction(['name', 'lastName', 'age']);

blackJack.set('name', 'Black');
blackJack.set('lastName', 'Jack');
blackJack.set('age', 53);
console.log(blackJack.get('name')); // 'Black'
console.log(blackJack.get('lastName')); // 'Jack'
console.log(blackJack.get('age')); // 53


class Structure {
  struct: unknown[];
  getIndex: Function;

  constructor(scheme: string[]) {
    this.struct = new Array(scheme.length);
    this.getIndex = this.generateFunction(scheme);
  }

  generateFunction(scheme: string[]): Function {
    const getKeyIndex = `
      switch(key) {
        ${scheme.reduce((acc, key, i) => acc + `case '${key}': return ${i};`, '')}
        default: break;
      }
    `;

    return new Function('key', getKeyIndex);
  }

  set(key: string, value: unknown) {
    this.struct[this.getIndex(key)] = value;
  }

  get(key: string) {
    return this.struct[this.getIndex(key)];
  }
}

const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);
// console.log(jackBlack);
console.log(jackBlack.get('name')); // 'Jack'
