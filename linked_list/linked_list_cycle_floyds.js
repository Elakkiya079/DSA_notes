function Node(val) {
	this.val = val;
	this.next = null;
}

function MyLinkedList() {
	this.head = null;
	this.size = 0;
}
var hasCycleFloyds = function (head) {
	if (head == null) return false;
	let slow = head;
	let fast = head.next;
	while (fast != null && fast.next != null) {
		if (slow == fast) return true;
		slow = slow.next;
		fast = fast.next.next;
	}
	return false;
};
let list = new MyLinkedList();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

list.head = node1;
console.log(hasCycleFloyds(list.head));
//let current = list.head;
//while (current) {
//	console.log(current.val);
//	current = current.next;
//}

//Time Complexity - O(log n)
//Space complexity - O(1)
