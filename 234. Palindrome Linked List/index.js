/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head.next) {
    return true;
  }

  const q = [];

  while (head) {
    q.push(head);
    head = head.next;
  }

  for (let i = 0; i <= Math.floor(q.length / 2); i++) {
    const l = q[i];
    const r = q[q.length - 1 - i];
    if (l.val !== r.val) {
      return false;
    }
  }

  return true;
};

const head = {
  val: 1,
  next: { val: 2, next: { val: 2, next: { val: 1, next: null } } },
};

isPalindrome(head);
