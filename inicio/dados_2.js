let preco = 19.90;
let desconto = 0.4;

console.log(19.9 * (1-0.4));
console.log(preco * (1-desconto));
let precoComDesconto = preco * (1-desconto);
console.log(precoComDesconto); //ideal trabalhar com variáveis...


//var "identificador" = ;
//= identificação
//ideal bons nomes para variáveis, nomes de arquivos, constantes --> identificadores.

let nome = "Caderno ";
let categoria = "Papelaria";
console.log(nome + categoria); //Concatenação


console.log("Produto: " + nome 
    + "// Categoria: " + categoria
    + "// Preço: " + preco
    + "// Desconto : " + desconto*100 + "%"); //Mais linhas pode separar em várias linhas.