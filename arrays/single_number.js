//Example 1:

//Input: nums = [2,2,1]

//Output: 1

//Example 2:

//Input: nums = [4,1,2,1,2]

//Output: 4

//Example 3:

//Input: nums = [1]

//Output: 1




// extra space
var singleNumber = function (nums) {
	let hash = {};
	for (let i = 0; i < nums.length; i++) {
		if (!hash[nums[i]]) {
			hash[nums[i]] = 1;
		} else {
			hash[nums[i]]++;
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (hash[nums[i]] == 1) {
			return nums[i];
		}
	}
};

//no extra space
var singleNumber = function (nums) {
	let xor = 0;
	for (let i = 0; i < nums.length; i++) {
		xor = xor ^ nums[i];
	}
	return xor;
};