function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let sums = [0];
  let sumsMap = new Map();
  sumsMap.set(0, 0);
  let nums = [];

  let i = 1;

  while (head) {
    const { val } = head;
    head = head.next;
    const sum = val + sums[sums.length - 1];

    if (sumsMap.has(sum)) {
      const prevSumIdx = sumsMap.get(sum);

      for (let j = 0; j < i - prevSumIdx - 1; j++) {
        nums.pop();
        const sum = sums.pop();
        sumsMap.delete(sum);
      }

      i = prevSumIdx + 1;
    } else {
      sumsMap.set(sum, i);
      sums.push(sum);
      nums.push(val);

      i++;
    }
  }

  if (nums.length) {
    head = new ListNode(nums[0]);
    let cur = head;

    for (let i = 1; i < nums.length; i++) {
      const n = nums[i];
      cur.next = new ListNode(n);
      cur = cur.next;
    }

    return head;
  }

  return null;
};
const head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: -3, next: { val: -2, next: null } } },
  },
};
const res = removeZeroSumSublists(head);
console.log("🚀 ~ res:", res);
