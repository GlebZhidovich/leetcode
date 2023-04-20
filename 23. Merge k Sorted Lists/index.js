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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let head = null,
    tail = null;

  const store = [];
  lists.forEach((list) => {
    let cur = list;
    while (cur) {
      store.push(cur);
      cur = cur.next;
    }
  });

  store.sort((a, b) => a.val - b.val);

  store.forEach((node) => {
    if (head) {
      tail.next = node;
      tail = node;
    } else {
      tail = head = node;
    }
  });

  return head;
};
