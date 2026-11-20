function Node(val) {
	this.val = val;
	this.next = null;
}

function MyLinkedList() {
	this.head = null;
	this.size = 0;
}

//Approach -1 :this will take extra space for the array
//var isPalindrome = function (head) {
//	let current = head;
//	let arr = [];
//	while (current) {
//		// console.log(current)
//		arr.push(current.val);
//		// console.log(arr)
//		current = current.next;
//	}
//	let left = 0;
//	let right = arr.length - 1;
//	while (left < right) {
//		if (arr[left] != arr[right]) return false;
//		left++;
//		right--;
//	}
//	return true;
//};

//Approach -2 :
var isPalindrome = function (head) {
    //find the middle element of the list
    let slow=head;
    let fast=head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast= fast.next.next;
    }
    //reverse the second half of the list
    let prev=null;
    let current = slow;
    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
        //console.log(prev.val);
    }
    //checking for palindrome
    let firstHead = head;
    let secondHEad = prev;
    while(secondHEad){
        if(firstHead.val != secondHEad.val)
            return false;
        firstHead = firstHead.next;
        secondHEad = secondHEad.next;
    }
    return true;
}


let list = new MyLinkedList();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);
let node6 = new Node(1);
//let node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
//node5.next = node6;
//node6.next = node7;

list.head = node1;
console.log(isPalindrome(list.head));
//let current = list.head;
//while (current) {
//	console.log(current.val);
//	current = current.next;
//}

//Time Complexity - O(n)+O(n)+O(n) = O(n)
//Space complexity - O(1)
