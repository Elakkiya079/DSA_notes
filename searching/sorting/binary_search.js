var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (right >= left) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] == target) return mid;
		else if (target > nums[mid]) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
};

//Time Complexity -
// Best case - O(1)
// Worst Case - O(log n)
//Space complexity - O(1)
