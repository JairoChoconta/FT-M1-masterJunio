'use strict'

function BinarioADecimal(num) {
  // tu codigo aca:
  let sum = 0;
  let exp = 0;
  for ( let i = num.length - 1; i >= 0; i-- ) {
      sum += num[i] * Math.pow(2, exp);
      exp++;
  } 
  return sum;
}

function DecimalABinario(num) { //15
  // tu codigo aca:
  let resto = '';
  while ( num > 0 ) {
    resto = (num % 2) + resto;
    num = Math.floor( num/2 ); //7.4 -> 7
  }
  return resto; 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}