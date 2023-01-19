const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Numérico é inteiro? Resposta booleana


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed serve para limitar as casas decimais.
console.log(media.toString()) //toString converte para String
console.log(media.toString(2)) //tconverte para Número Binário
medialetra = media.toString() //transformando variável para string
console.log(typeof medialetra) //aparece como letra a nova variável