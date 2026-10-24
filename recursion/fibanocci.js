var fib = function (n) {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
};
console.log(fib(5))


//Time Complexity

// O(2 ^ n)

// if need to improve the time complexity we need to use dynamic programming