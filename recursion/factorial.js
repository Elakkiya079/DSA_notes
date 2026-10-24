function factorial(n) {
	if (n == 0) return 1;
	return n * factorial(n - 1);
}
let n = 10;

console.log(factorial(n));
