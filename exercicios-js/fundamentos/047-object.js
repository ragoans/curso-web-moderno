
// {} representa um objeto
// objeto coleção de chave e valor
const prod1 = {}

// Atributos do objeto são criados dinamicamente
// Quando printa aparece as variáveis com os valores relacionados entre {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log (prod1)

// Adiciona mais flexibilidade no código

// Pode ser feito assim também, lembrando do separador vírgula (,)
// Possível também criar objetos dentro de objetos.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)