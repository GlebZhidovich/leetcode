class Heap {
  #storage = [];
  insert(k) {
    this.#storage.push(k);

    for (let index = this.#storage.length - 1; index >= 0; ) {
      const pIdx = Math.floor((index - 1) / 2);
      let parent = this.#storage[pIdx];
      const child = this.#storage[index];
      if (parent?.value < child?.value) {
        [this.#storage[pIdx], this.#storage[index]] = [child, parent];
        index = pIdx;
      } else {
        break;
      }
    }
  }
  extract() {
    if (this.#storage.length == 1) {
      return this.#storage.pop();
    }
    const result = this.#storage[0];
    this.#storage[0] = this.#storage.pop();

    for (let index = 0; index < this.#storage.length; ) {
      const cur = this.#storage[index];
      const lChildIdx = 2 * index + 1;
      const rChildIdx = 2 * index + 2;
      const lChild = this.#storage[lChildIdx];
      const rChild = this.#storage[rChildIdx];
      const hasChild = lChild || rChild;
      const isLow = rChild?.value > cur.value || lChild?.value > cur.value;
      if (hasChild && isLow) {
        const isBoth = lChild && rChild;
        if (isBoth) {
          const isLeft = lChild.value > rChild.value;
          if (isLeft) {
            [this.#storage[index], this.#storage[lChildIdx]] = [lChild, cur];
            index = lChildIdx;
          } else {
            [this.#storage[index], this.#storage[rChildIdx]] = [rChild, cur];
            index = rChildIdx;
          }
        } else {
          if (lChild && lChild.value > cur.value) {
            [this.#storage[index], this.#storage[lChildIdx]] = [lChild, cur];
            index = lChildIdx;
          } else {
            [this.#storage[index], this.#storage[rChildIdx]] = [rChild, cur];
            index = rChildIdx;
          }
        }
      } else {
        break;
      }
    }

    return result;
  }
}

const heap = new Heap();
[
  { value: 1 },
  { value: 5 },
  { value: 3 },
  { value: 8 },
  { value: 3 },
  { value: 7 },
  { value: 4 },
].forEach((n) => heap.insert(n));
[1, 5, 3, 8, 3, 7, 4].forEach((n) => {
  const res = heap.extract(n);
  console.log("🚀 ~ file: index.js:68 ~ res:", res);
});
