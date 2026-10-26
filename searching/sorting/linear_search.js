function linearSearch(a, target) {
	for (let i = 0; i < a.length; i++) {
		if (a[i] == target) return true;
	}
	return false;
}

let a = [1, 2, 3, 4, 5, 6];
let target = 10;
console.log(linearSearch(a, target));

//Time complexity - O(n)
//Space Complexity - O(1)
