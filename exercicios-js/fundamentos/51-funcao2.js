// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log (a + b)
}
imprimirSoma(2,3)



// Armazenando uma função arrow em um variável
const soma = (a,b) => {
    return a + b
}
console.log(soma(2, 3))
// Sem a palavra function somente com => (arrow)


//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')