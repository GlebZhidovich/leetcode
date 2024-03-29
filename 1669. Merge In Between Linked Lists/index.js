/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let cur = list1;
  let i = 0;
  while (cur.next !== null) {
    if (i === a - 1) {
      [cur.next, cur] = [list2, cur.next];
      i++;

      continue;
    }

    if (i === b) {
      while (list2.next) {
        list2 = list2.next;
      }
      list2.next = cur.next;
      return list1;
    }
    i++;
    cur = cur.next;
  }

  return list1;
};
