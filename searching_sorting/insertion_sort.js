function insertion(a) {
	let n = a.length;
	for (let i = 1; i < n; i++) {
		let curr = a[i];
        let prev = i-1;
        while(a[prev] > curr && prev >=0){
            a[prev+1]=a[prev]
            prev --;
        }
        a[prev+1]=curr
	}
	return a;
}

let a = [7, 1, 5, 4, 3, 2];
console.log("Results : ", insertion(a));
