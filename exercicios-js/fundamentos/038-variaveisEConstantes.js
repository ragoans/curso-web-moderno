var a = 3
let b = 4

var a = 30 //somente var consegue redeclarar uma variável (anomalia somente do JS)
b = 40

console.log(a,b) //Declarou os valores de cima.


a = 300
b = 400

console.log(a,b) //Declarou os valores após aparecerem.


const c = 5 //Não permite atribuir outro valor.
// c = 50 Não pode ser feito
console.log(c)

// Sempre que tiver um dado sem chance de mudar o ideal é utilizar const.

// Ideal também atribuir mais variáveis e não ficar reatribuindo valores para a mesma variável.