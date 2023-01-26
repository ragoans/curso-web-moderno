console.log('a = ', a)
var a = 2
console.log('a = ', a)

//mesmo o comando sendo anterior à declaração da variável "a" ocorre o içamento (hoisting) da declaração da variável.

// Porém como não havia sido atribuído o valor ela declara como undefined

// Em outras linguagens provavelmente daria erro


function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}

teste()

// O mesmo ocorre quando o caso for dentro de uma função

console.log('a = ', a)
let a = 2
console.log('a = ', a)
// Com let o valor não é içado