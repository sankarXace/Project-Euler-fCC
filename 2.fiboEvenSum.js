function fiboarrbelowN(n) {
    if (n <= 1) return n;
    const arr = [0, 1];
    let i = 1;
    while (arr[i] + arr[i - 1] <= n) {
        arr.push(arr[i] + arr[i - 1]);
        i++;
    }
    return arr;
}


function fiboEvenSum(n) {
    let fiboArr = fiboarrbelowN(n);
    let sum = 0;
    for (let i = 0; i < fiboArr.length; i++) {
        if (fiboArr[i] % 2 === 0) {
            sum += fiboArr[i];
        }
    }
    return sum;
}


console.log(fiboEvenSum(8));