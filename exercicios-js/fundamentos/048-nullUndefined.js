let valor //não inicializada
console.log(valor) 
//como não foi atribuído valor a variável é undefined

/*
console.log(valor2)
Neste caso seria not defined porque não existe a variável
*/

valor = null
console.log(valor)
// null ausência de valor
// ideal na hora de tirar um valor de um objeto usar null e não undefined

/*
console.log(valor.toString())
    .toString não tem referência em String
    Erro no console
*/

const produto = {}
console.log(produto.preco)
//resulta undefined
console.log(produto)

produto.preco = 3.50
console.log(produto) 

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco - ideal para tirar o atributo de um objeto
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)



