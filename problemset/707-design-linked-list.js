// Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement these functions in your linked list class:

// get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
// addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// addAtTail(val) : Append a node of value val to the last element of the linked list.
// addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
// deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

// Example:

// Input:
// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[1],[1]]
// Output:
// [null,null,null,null,2,null,3]

// Explanation:
// MyLinkedList linkedList = new MyLinkedList(); // Initialize empty LinkedList
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
// linkedList.get(1);            // returns 2
// linkedList.deleteAtIndex(1);  // now the linked list is 1->3
// linkedList.get(1);            // returns 3

// Constraints:

// 0 <= index,val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail,  addAtIndex and deleteAtIndex.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  let current;
  if (this.head === null) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index >= 0 && index <= this.size) {
    let node = new Node(val),
      current = this.head,
      previous,
      i = 0;

    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (i++ < index) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }

    this.size++;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > -1 && index < this.size) {
    let current = this.head,
      previous,
      i = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (i++ < index) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
