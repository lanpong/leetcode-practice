// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

// Note:

// The number of nodes in the given list will be between 1 and 100.

// 返回单链表的中间节点，如果中间节点为两个，则返回两个中的第二个。

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
var middleNode = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let cursor1 = head,
    cursor2 = head;

  // 就是统一个链表同时遍历，一个进步为 1，一个进步为 2，进步 2 的完成之后就是进步 1 中间节点
  while (cursor1 && cursor1.next) {
    cursor2 = cursor2.next;
    cursor1 = cursor1.next.next;
  }

  return cursor2;
};
