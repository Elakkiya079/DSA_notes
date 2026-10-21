//IP - [0,3,1,2,3,3] val =2
//OP - [0,3,1,3,3,_] x=5

var removeElement = function (nums, val) {
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != val) {
			nums[x] = nums[i];
			x = x + 1;
		}
	}
	return x;
};


console.log(
	"result",
	removeElement([0, 3, 1, 2, 3, 3],2),
);