// operadores relacionais true ou false

// pode ser relacionar somente com valores ou com valores e tipos simultaneamente

console.log('01)', '1' == 1) //compara valores e não tipos

console.log('02)', '1' === 1) // compara valores e tipos

console.log('03)', '3' != 3) // diferente, mas somente o valor

console.log('04)', '3' !==3) // diferente, valor e tipo



console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //data de referência marco inicial
const d2 = new Date(0) 
console.log('09)', d1 === d2) //compara as entradas de memória então dá falso
console.log('10)', d1 == d2) //idem
console.log('11)', d1.getTime() === d2.getTime()) //neste caso compara as datas em si
console.log('12)', undefined == null)
console.log('13)', undefined === null)