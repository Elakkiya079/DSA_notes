// n % 10 = get the last digit(which is reminder)
// n / 10 = remove the last digit

function isPalindrome(x) {
	if (x < 0) return false;
	let rem;
	let res = x;
	let rev = 0;
	while (x > 0) {
		rem = x % 10;
		rev = 10 * rev + rem;
		x = Math.floor(x / 10);
	}
	if (rev == res) return true;
	else return false;
};

//let x =121
//let x = -121
let x = 12345
let result = isPalindrome(x)
console.log(result)