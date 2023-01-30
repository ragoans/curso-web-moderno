// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //tira de dentro de um objeto "nome" e "idade" de um objeto "pessoa".
console.log(nome, idade) // ou seja tira de um objeto e atribui as conrrespondentes variáveis.

const { nome: n, idade: i } = pessoa //pode alterar o nome da variável também
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // possível tirar também elementos alinhados.