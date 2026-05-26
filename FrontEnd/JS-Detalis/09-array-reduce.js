const estoque = [
{
    descricao : "Camisa Polo",
    cor : " verde",
    preco : 49.99,
    perfil : "M",
    quantidade: 10,
    promocao : true 
    
},
{
    descricao : "Camisa Polo",
    cor : " Amarela",
    preco : 29.99,
    perfil : "F",
    quantidade: 15,
     promocao : true 
    
},
{
    descricao : "Camisa Polo",
    cor : " Azul",
    preco : 29.99,
    perfil : " M",
    quantidade: 100,
     promocao : true 
    
},
{
    descricao : "Camisa Polo",
    cor : " roxo",
    preco : 49.99,
    perfil : "F",
    quantidade: 5,
     promocao : false 

    
},
];

// Reduz o array a um único elemento. No caso um somatório, por exemplo:
let totalPreco = 0;
totalEstoque = estoque.reduce((total, produto)=> {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;


},0);

console.log(`Você tem um total de ${totalEstoque} Produtos no Estoque:`);
console.log(`O valor total do seu estoque é R$ ${totalPreco.toFixed(2)}`);


