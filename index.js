class MyCircularQueue {
  store = [];
  head = 0;
  tail = 0;
  k;

  /**
   * @param {number} k
   */
  constructor(k) {
    if (k <= 0) {
      throw new Error("wrong k");
    }
    this.k = k;
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.Rear() == -1) {
      this.store[this.tail] = value;
      return true;
    }

    let next = this.tail;
    if (next == this.k - 1) {
      next = 0;
    } else {
      next++;
    }

    if (next == this.head && this.Front() != -1) {
      return false;
    }

    this.tail = next;
    this.store[this.tail] = value;
    return true;
  }

  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.Front() == -1) {
      return false;
    }
    let next = this.head;
    if (next == this.k - 1) {
      next = 0;
    } else {
      next++;
    }

    if (this.head == this.tail) {
      this.store[next] = undefined;
      this.tail = next;
    }
    this.head = next;
    return true;
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.store[this.head] != undefined) {
      return this.store[this.head];
    }
    return -1;
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.store[this.tail] != undefined) {
      return this.store[this.tail];
    }
    return -1;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.Front() == -1;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    let next = this.tail;
    if (next == this.k - 1) {
      next = 0;
    } else {
      next++;
    }
    return next == this.head;
  }
}

const myCircularQueue = new MyCircularQueue(3);
console.log(
  myCircularQueue.enQueue(7),
  myCircularQueue.deQueue(),
  myCircularQueue.Front(),
  myCircularQueue.deQueue(),
  myCircularQueue.Front(),
  myCircularQueue.Rear(),
  myCircularQueue.enQueue(0),
  myCircularQueue.isFull(),
  myCircularQueue.deQueue()
);
