// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let a = null;
  let b = head;

  while (b !== null) {
    let c = b.next;
    a = b;
    b = c;
  }

  return a;
};

// 递归解法
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let tail = head.next;

  head.next = null;

  let newHead = reverseList(tail);

  tail.next = null;

  return newHead;
};
