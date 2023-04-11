class MinStack {
  store = [];
  min;

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.min ??= val;
    this.min = Math.min(val, this.min);
    this.store.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    const val = this.store.pop();
    if (val == this.min) {
      this.min = Math.min(...this.store);
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.store.at(-1);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
