const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//Template String permite quebra de linhas e espaços em branco.

const template = ` //Tem que usar crase
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`) //Cifra permite chamada de operações ou variáveis

//função
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //Cifra fez chamada de função aplicada dentro da variável