//Uutlizado para filtrar um elemento de um array. retorna apenas o encontrado, veja
const numeros = [5, 10, 14];

const numeroEncontrado = numeros.filter((n) => {

    return n == 10;

});

const nomes = [
    "Paulo",
    "Davi",
    "Gabriel",
    "Gustavo a",
    "Gustavo s",
    "Walyson",
    "Ney",
    "Cr7",
    "Marcos"



];

//fazer chamar nome com 3 ou 6 letras

// const pessoasLegais = nomes.filter((nome) => {
//     return nome.length <=3 || nome.length == 6;
// });

// console.log(pessoasLegais);


// console.log(numeroEncontrado);


pessoasLetraG = nomes.filter((nome) => {

    const primeiraLetra = nome.substring(0, 1 );
    return primeiraLetra == "G" || primeiraLetra == "P";
});
console.log(pessoasLetraG);