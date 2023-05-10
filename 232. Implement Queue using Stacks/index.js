var MyQueue = function () {
  this.stack = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.stack.length) {
    while (this.stack.length) {
      this.stack2.push(this.stack.pop());
    }
    this.stack.push(x);
    while (this.stack2.length) {
      this.stack.push(this.stack2.pop());
    }
  } else {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const q = new MyQueue();
q.push(1);
q.push(2);
q.peek(2);
q.pop(2);
console.log("🚀 ~ file: index.js:55 ~ q:", q);
console.log("🚀 ~ file: index.js:55 ~ q:", q.empty());
