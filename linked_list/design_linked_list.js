function Node(val) {
	this.val = val;
	this.next = null;
}

function MyLinkedList() {
	this.head = null;
	this.size = 0;
}

function addAtHead(val) {
	let newNode = new Node(val);
	newNode.next = list.head;
	list.head = newNode;
	list.size++;
}

function addAtLast(val) {
	let newNode = new Node(val);
	//corner case -  if the linked list is empty
	if (list.head == null) {
		this.head = newNode;
	} else {
		let current = list.head;
		while (current.next != null) {
			current = current.next;
		}
		current.next = newNode;
	}
	list.size++;
}

function addAtIndex(index, val) {
	let newNode = new Node(val);
    //corner case - if index is out of bound
    if(index < 0 || index > list.size){
        console.log('-1');
        return
    }
	//corner case - if add at 1st position
	if (index == 0) {
		addAtHead(val);
	}
	//corener case - if add at last position
	else if (index == list.size) {
		addAtLast(val);
	} else {
		let current = list.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		newNode.next = current.next;
		current.next = newNode;
	}
	list.size++;
}

function get(index) {
	if (index < 0 || index >= list.size) {
		console.log("-1");
		return;
	}
	let current = list.head;
	for (let i = 0; i < index; i++) {
		current = current.next;
	}
	console.log("get val", current.val);
}

function deleteAtIndex(index) {
	//corner case - if the index is not valid
	if (index < 0 || index >= list.size) {
		console.log("-1");
		return;
	}
	//corner case - if to delete 1st node
	if (index == 0) {
		list.head = list.head.next;
	} else {
		let current = list.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		console.log("curr", current);
		let deletionNode = current.next;
		console.log("deletion node", deletionNode);
		current.next = deletionNode.next;
		console.log("current next", current.next);
	}
	list.size--;
}
let list = new MyLinkedList();

let node1 = new Node(20);
let node2 = new Node(30);
let node3 = new Node(40);

node1.next = node2;
node2.next = node3;

list.head = node1;
list.size = 3;

addAtHead(10);
addAtLast(50);
addAtIndex(2, 80);
get(4);
deleteAtIndex(5);

let current = list.head;
while (current) {
	console.log(current.val);
	current = current.next;
}
