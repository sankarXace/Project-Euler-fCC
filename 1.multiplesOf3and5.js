function multiplesOf3and5(number) {
  let result = 0;
  for(let i=1;i<number;i++){
    if(i%3==0 || i%5==0){
      result+=i;
    }
  }
  return result;
}

// Not Optimized but different
function multiplesOf3and5usingformula(number) {
  const sum = (n) => n * (n + 1) / 2;
  const sum3 = 3 * sum(Math.floor((number - 1) / 3));
  const sum5 = 5 * sum(Math.floor((number - 1) / 5));
  const sum15 = 15 * sum(Math.floor((number - 1) / 15));
  return sum3 + sum5 - sum15;
}
