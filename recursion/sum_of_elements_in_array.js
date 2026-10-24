function sum(n) {
	if (n == 0) return arr[0];

	return arr[n] + sum(n - 1);
}
let arr = [1, 2, 3, 4, 5];
let n = arr.length - 1;
console.log(sum(n));
