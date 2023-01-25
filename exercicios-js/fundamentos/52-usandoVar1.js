{{{{var sera = 'Será?'}}}}

console.log(sera) 


// Escopo: Até onde a variável é acessível?
// No caso de JavaScript a variável é acessível dentro de qualquer bloco (diferente de outras linguagens)


function teste() {
    var local = 123
    console.log(local) //Se for aqui ela acessa...
}


teste()
// console.log(local) - não é possível
//Quando a variável é definida dentro de uma função o escopo dela fica limitado à função e por isso não é possível acessá-la fora

// Variável criada fora de uma função é uma variável global (window na internet)

// Não é ideal adotar escopo global para evitar sobrescrição de variável.

