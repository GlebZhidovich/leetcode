/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const nodes = [];
  while (head) {
    nodes.push(head);
    head = head.next;
  }

  for (let i = 0; i < nodes.length - 2; i++) {
    const node = nodes[i];
    const next = nodes[i + 1] ?? null;
    const last = nodes[nodes.length - 1];
    node.next = last;
    last.next = next;
    nodes.pop();
  }
  nodes[nodes.length - 1].next = null;
  return nodes[0];
};
