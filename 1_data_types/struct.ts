class Structure {
  struct: Record<string, unknown> = {};

  constructor(keys: string[]) {
    if (keys.length === 0) throw Error('Error. You need to add array of keys.');

    keys.forEach((key) => {
      this.struct[key] = null;
    })
  }

  set(key: string, value: unknown) {
    this.struct[key] = value;
  }

  get(key: string) {
    return this.struct[key];
  }
}

const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);
// console.log(jackBlack);
jackBlack.get('name') // 'Jack'


