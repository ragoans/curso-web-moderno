const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// printa de acordo com a posição do array sendo a primeira com o valor 0.

console.log(valores[4]) //undefined já que não existe a posição 4

valores [4] = 10 //adiciona ou troca valores no array
console.log(valores) 
console.log(valores.length) //número de elementos na array


valores.push({id: 3}, false, null, 'teste') //adiciona itens no final da array
console.log(valores)

//ideal array de tipos de dados diferentes

console.log(valores.pop()) //retorna o último valor do array

delete valores[0] //deleta valor na posição
console.log(valores)

console.log(typeof valores) //array tipo objeto
