const hobbies = [
"Correr",
"Nadar",
"Jogar Bola",
"Viajar",
"Lutar",
"Conversar Muito",
"Ler Livro",
"Malhar na Academia",
"Maratonar Séries",
"Dormir",
"Jogar Basquete",

];

// utilizando para itera arrays e retomar um novo array, compondo um novo
//  resultado para cada indice do array antigo, veja:

const novosHobbies = hobbies.map((hob) =>{
return `<p>${hob}</p>`;

})

console.log(novosHobbies);