
// Da mesma forma que variáveis são nomeadas pelo usuário e deve obedecer as regras de boas nomenclaturas

// Função sem retorno
function imprimirSoma(a, b) { //a e b são os parâmetros
    console.log(a + b)
}

imprimirSoma(2,3) // Executa a soma com as variáveis denotadas
imprimirSoma(2) // Se for definido só um valor o outro fica undefined
imprimirSoma(2,3,5,6) // Mais números só numera os primeiros (Não dá erro)


// Função com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2,3)) //substitui o b inicial
console.log(soma(2)) // substitui somente o a