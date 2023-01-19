
/* Desafio da troca de valores

let a = 7
let b = 94

Trocar os valores e depois da troca... a = 94 e b = 7. */

let a = 7;
let b = 94;
const TEMP = a;

// [a,b] = [b,a]

a = b;
b = TEMP;

console.log (a);
console.log (b);