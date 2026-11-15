function Node(val){
    this.val = val;
    this.next = null;
}

function MyLinkedList(){
    this.head = null;
    this.size =0;
}
function FindMiddle(){
    let current = list.head;
    let slow=list.head;
    let fast = list.head;
    //console.log("slow", slow.val);
    //console.log("fast", fast.val);
    while(fast!=null && fast.next != null){
        slow = slow.next;
        //console.log('slow',slow.val)
        fast = fast.next.next;
        //console.log('fast',fast.val);
    }
    console.log('middle',slow)
}

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

let current = list.head;
while(current){
    console.log(current.val);
    current = current.next;
}

FindMiddle()