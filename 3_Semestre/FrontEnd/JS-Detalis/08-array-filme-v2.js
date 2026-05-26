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

// // retornar todas as camisetas do perfil feminino
// const camisetasFemininas = estoque.filter((camiseta) => {

//     return camiseta.perfil == "F";
// });

// console.log(camisetasFemininas);    

// retorna todas as camisetas com promocao
let qtdPromocao = 0;
const camisetasPromocao = estoque.filter((camiseta) => {
   if(camiseta.promocao == true){
    qtdPromocao += camiseta.quantidade;
   }
    return camiseta.promocao == true;
});  

console.log(`Quantidade de camisetas em promoção: ${qtdPromocao}`);
console.log(camisetasPromocao);

