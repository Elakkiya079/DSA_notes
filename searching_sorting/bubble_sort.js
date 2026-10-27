function bubble(a) {
	let n = a.length;
	for (let i = 0; i < n - 1; i++) {
		let isSwapped = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (a[j] > a[j + 1]) {
				let temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
				isSwapped = true;
			}
		}
		if (!isSwapped) break;
	}
	return a;
}

let a = [5, 2, 4, 1];
console.log("Results : ", bubble(a));

//Time complexity => Worst case - O(n ^ 2)

//Space complexity => O(1) - constant
