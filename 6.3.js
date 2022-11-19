function sum(num1) {
    return function(num2) {
        return (num1 + num2);
    };
}

let func = sum(5);
console.log( func(0), func(1), func(2) );
