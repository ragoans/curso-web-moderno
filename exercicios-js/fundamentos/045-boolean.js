let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Exclamação significa negação (duas negação da negação)

console.log(!true)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
//de maneira geral são falsos valores nulos ou sem resposta

console.log('pra finalizar...')
let nome = ''
console.log(nome || 'Desconhecido') 
// Caso não tenha texto encaixado retorna o texto que foi encontrado 
// || retorna o primeiro valor verdadeiro
