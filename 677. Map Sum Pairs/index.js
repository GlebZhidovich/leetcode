var MapSum = function () {
  this.store = new Map();
  this.prefixes = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.store.set(key, val);

  for (let i = 0; i < key.length; i++) {
    const prefix = key.slice(0, i + 1);
    this.prefixes[prefix] ??= new Set();
    this.prefixes[prefix].add(key);
  }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let sum = 0;

  this.prefixes[prefix]?.forEach((key) => {
    sum += this.store.get(key);
  });

  return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
