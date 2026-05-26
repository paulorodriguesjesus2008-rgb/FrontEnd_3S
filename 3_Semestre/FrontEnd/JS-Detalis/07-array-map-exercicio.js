const numeros = [
50,
200,
250,
800,
500,
9876,
99,
134

];

// rodar o map gerando um novo array, com o dobro dos números do orinigal
// após, exibida o valores do array dobro no console utilizando o foreach


const numerosDobro = numeros.map((num) => {
    return num * 2;
});

console.log();
console.log(`Array Modificando:`);
console.log();


let textoResultado="";
numerosDobro.forEach((num) => {
    textoResultado +=`${num} | `;
});
//remover o ultimo pipe



textoResultado = textoResultado.substring(0, textoResultado.length - 3);
console.log(textoResultado);