/* 5! = 5*4*3*2*1 = 5*4!
       4! = 4*3*2*1...

5! = 5*4! = 5*4*3! = 5*4*3*2! = 5*4*3*2*1! = 5*4*3*2*1*0!
10! = 10*9! = 10*9*8! = 10*9*8*7! = ...

La operación matemática se expresa como:

n! = n * (n - 1) * (n - 2) * (n - 3)... */
/* 
function factorial(num) {
    let factorial = 1;
    for ( let i = num; i > 0; i-- ) {
        console.log(factorial *= i);
    }
    return factorial;
}
console.log(factorial(5)); */

function factorialRecursion(num) {
    if (num === 0) return 1;
    return num * factorialRecursion(num - 1)
}
console.log(factorialRecursion(5));