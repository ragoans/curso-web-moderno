let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade
console.log(num1)

--num1 //subtrai uma unidade
console.log(num1)

// formas pré-fixadas tem uma precedência maior

console.log(++num1 === num2--)
// Fica true pois o -- só foi executado em num2 após a comparação
console.log(num1 === num2) //logo depois fica diferente
