// '' "" e ``

const escola = 'Cod3r'

console.log(escola.charAt(4)) //Mostra a letra no índice 4, sendo que começa a contar a primeira letra do 0

console.log(escola.charAt(5)) //Retorna valor nulo

console.log(escola.charCodeAt(3)) //Retorna o valor na tabela Unicode / ASCII

console.log(escola.indexOf('d')) //Retonar o índice ao invés do valor

console.log(escola.substring(1)) //Imprime todos menos o índice 2
console.log(escola.substring(0,3)) //Imprime todos de 0 a 3 menos o 3

console.log('Escola '.concat(escola).concat("!")) //Função de Concatenação

console.log(escola.replace(3,"e")) //Troca letras na variável no índice indicado

console.log(escola.replace(/\d/, 'e')) //Troca todos as letras d pela string e

console.log(escola.replace(/\w/g, 'e')) //Troca todos os dígitos pela string e

console.log('Ana, Maria, Pedro'.split(',')) //Cria elementos independente pelo separador indicado --> Array