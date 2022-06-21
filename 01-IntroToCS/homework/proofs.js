function binarioADecimal(num) {
    let sum = 0;
    let position = 0;
    for ( let i = num.length - 1; i >= 0; i-- ) {
        sum += num[i] * Math.pow(2, position);
        position++;
    }
    return sum;
}
console.log(binarioADecimal('111'));

function decimalABinario(num) {
    let module = '';
    while (num > 0) {
        module += num % 2;
        num = Math.floor(num / 2);
    }
    return module.split('').reverse().join('');
}
console.log(decimalABinario(4));