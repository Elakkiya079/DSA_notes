function count_digit(n){
    if(n == 0) return 1;
    n = Math.abs(n)
    let count =0;
    while(n >0){
        n=Math.floor(n/10)
        count++;
    }
    return count;
}

//let n= 12345678
//let n = -12345678;
let n = 0;

let result = count_digit(n)
console.log(result)