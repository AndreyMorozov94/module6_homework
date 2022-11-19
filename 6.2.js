function primeNum(num) {
    let isPrime, result;
    isPrime = true;
    if (num > 1 && num <= 1000) {
      for (let i = 2; 1 < num; i++){
        if(num % i === 0) {
          isPrime = false;
        }
      }
      result = isPrime ? `число ${num} - простое` : `число ${num} - составное`;
    } else if (num > 1000){
      result = 'данные не верны';
    }
    console.log(result);
  }
  primeNum(3);