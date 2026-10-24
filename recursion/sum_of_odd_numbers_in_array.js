function sum(n) {
	if (n == 0) {
		if (arr[0] % 2 != 0) return arr[0];
		else return 0;
	}
	if (arr[n] % 2 != 0) {
		return arr[n] + sum(n - 1);
	} else {
		return 0 + sum(n - 1);
	}
}
let arr = [8, 5, 3, 2, 4, 6, 5, 1];
let n = arr.length - 1;
console.log(sum(n));
