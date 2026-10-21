function reverse(n) {
	let x_copy = Math.abs(n);
	let rev = 0;
	while (x_copy > 0) {
		rem = x_copy % 10;
		rev = 10 * rev + rem;
		x_copy = Math.floor(x_copy / 10);
	}
	let limit = Math.pow(2, 31);
	if (rev < -limit || rev > limit) return 0;
	return n < 0 ? -rev : rev;
}

let x = -12345;
let result = reverse(x);
console.log(result);