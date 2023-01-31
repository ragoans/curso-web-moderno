/*
TABELA VERDADE
v e v -> v
v e f -> f
f e ? -> f


f ou v -> v
f ou f -> f
v ou ? -> v


v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f


!v -> f
!f -> v
*/

// situação: Pessoa tem dois trabalhos. Se os dois derem certo ela irá comprar uma tv de 50". Se somente um der certo ela irá comprar uma tv de 32". Se qualquer trabalho der certo ela irá tomar sorvete. Se nenhum trabalho der certo ela não irá comprar nada.

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "||" ou
    const comprarTv50 = trabalho1 && trabalho2 // "&&" e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // xor, pois só será verdadeira se não for true true ou false false
    const manterSaudavel = !comprarSorvete // quando não comprar sorvete (se comprarSorvete for true será false e vice versa)

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true)) // caso de conseguir os dois trabalhos
console.log(compras(true, false))
console.log(compras(false, true)) // casos de conseguir somente um trabalho
console.log(compras(false,false)) // caso de não conseguir nenhum trabalho







