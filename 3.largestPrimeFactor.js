function isPrime(n){
    if(n<=1) return false;
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i === 0) return false;
    }
    return true;
}

function largestPrimeFactor(number){
    let prime = 2;
    while(number>1){
        while(number%prime === 0){
            number/=prime;
        }
        if(number === 1) break;
        do{
            prime++;
        }while(!isPrime(prime));
    }
    return prime;
}

console.log(largestPrimeFactor(13195));