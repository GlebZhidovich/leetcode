/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  let i = 0;

  while (fast.next) {
    fast = fast.next;

    if (i >= n) {
      slow = slow.next;
    }
    i++;
  }

  if (i + 1 === n) {
    return head.next;
  }
  slow.next = slow.next.next;

  return head;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

removeNthFromEnd(head, 1);
