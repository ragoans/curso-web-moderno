
// printa de acordo com a posição do array sendo a primeira com o valor 0.
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined já que não existe a posição 4


//adiciona ou troca valores no array
valores [4] = 10 
console.log(valores)


//número de elementos na array
console.log(valores.length) 


//adiciona itens no final da array
valores.push({id: 3}, false, null, 'teste') 
console.log(valores)

//retorna o último valor do array
console.log(valores.pop()) 


//deleta valor na posição
delete valores[0] 
console.log(valores)

//array tipo objeto
console.log(typeof valores) 

//ideal array de tipos de dados diferentes
