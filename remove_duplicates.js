// Input - [0 0 1 1 3 4 4 5] n = 8 
// Output- [0 1 3 4 5 _ _ _]

//Explanation

//we can maintain 2 pointer over here , 
//one should iterate through the array an dfind out all the unique Element
//second pointer will find out position where the elements should be placed


var removeDuplicates = function (nums) {
	console.log("nums", nums);
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[x]) {
			console.log("greater", nums[i], nums[x]);
			x = x + 1;
			console.log("x", x);
			nums[x] = nums[i];
			console.log("nums[x]", nums[x], "nums[i]", nums[i]);
		}
	}
	console.log("final", nums, "x", x + 1);
	return x + 1;
};

console.log('result',removeDuplicates([0,0,1,2,3,3,4,5,5,6,7,7,7,8]))