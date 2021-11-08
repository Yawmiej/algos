class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 2;
    }

    calculateHash(key) {
      return key.toString().length % this.size
    }

    add(key, value) {
      const hash = this.calculateHash(key);
      if(!this.values.hasOwnProperty(hash)){
        this.values[hash] = {}
      }

      if(!this.values[hash].hasOwnProperty(key)) {
        this.length ++;
      }
      this.values[hash][key] = value;
    }

    search(key) {
      const hash = this.calculateHash(key);
      if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty[key]) {
        return this.values[hash][key];
      }


      return null;
    }
}

const hashTable = new HashTable();

hashTable.add('canada', 300);
hashTable.add('france', 3050)

console.log(hashTable.search('france'))