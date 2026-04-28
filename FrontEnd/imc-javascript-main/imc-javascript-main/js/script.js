async function calcular() {
  // pegar os valores dos campos
  //nome
  const nome = document.getElementById("nome").value.trim();
  //altura
  const altura = parseFloat(document.getElementById("altura").value);
  //peso
  const peso = parseFloat(document.getElementById("peso").value);

  // exibir no console
  //   console.log(nome);
  //  console.log(altura);
  //  console.log(peso);


  // dar mensagem se tiver faltando sem preencher
  if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {

    alert("Por favor, preencha todos os campos.");
    return false;
  }
  console.log("Libera para cadastrar");
  // calcular o imc
  const IMC = calcularIMC(peso, altura);
  // console.log(IMC);


  // gerar o texto da situação
  const situacao = gerarSituacao(IMC);
  // console.log(situacao);


  const objIMC = {
    nome: nome,
    altura: altura,
    peso: peso,
    IMC: IMC,
    situacao: situacao


  }

  // cadastrar na api
  const dadosGravados = await cadastrarNaApi(objIMC);
  console.log(dadosGravados);


  if ("error" in dadosGravados) {
    alert(dadosGravados.error);
  } else {
    //mostrar no html (inserir a linha na tabela)
    // mostrarNaTela(dadosGravados)
    carregarCadastros();
  }
}

async function carregarCadastros() {
  // Fazer o fetch
  try {
    const retorno = await fetch("http://localhost:3000/imc");

    const dados = await retorno.json(); // convertendo a resposta para json

    dados.sort((a, b) => a.nome.localeCompare(b.nome));


    document.getElementById("cadastro").innerHTML = ""; // limpa a tabela antes de carregar 

    // percorre os dados para cada item 
    dados.forEach(item => {
      mostrarNaTela(item);
    });
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar os dados");
  }
  // Carregar os dados no html
  alert("Carregando os dados...");
}


async function cadastrarNaApi(objCadastro) {
  // fazer um post na api
  try {
    const retorno = await fetch("http://localhost:3000/imc", {

      method: "POST",
      body: JSON.stringify(objCadastro),
      headers: {
        "Content-Type": "application/json; charset=UFT-8"
      }
    });

    const dadosGravados = await retorno.json();
    return await dadosGravados;

  } catch (error) {
    console.log(error);
    return await {
      error: "problemas para gravar na API"
    };


  }
}


function mostrarNaTela(objCadastro) {
  // insere uma linha na tabela html
  document.getElementById("cadastro").innerHTML += `

      <tr>
      <td>${objCadastro.nome}</td>
      <td>${objCadastro.altura}</td>
      <td>${objCadastro.peso}</td>
      <td>${objCadastro.IMC}</td>
      <td>${objCadastro.situacao}</td>
      </tr>`;


}


function calcularIMC(peso, altura) {
  return peso / (altura * altura);

}

// Menor que 16 – Magreza grave;
// 16 a menor que 17 – Magreza moderada;
// 17 a menor que 18,5 – Magreza leve;
// 18,5 a menor que 25 – Saudável;
// 25 a menor que 30 – Sobrepeso;
// 30 a menor que 35 – Obesidade Grau I;
// 35 a menor que 40 – Obesidade Grau II (considerada severa);
// Maior que 40 – Obesidade Grau III (considerada mórbida).


//A função deverá retornar o texto da situação baseada no IMC
function gerarSituacao(IMC) {
  if (IMC < 16) {
    return "Magreza grave";
  } else if (IMC >= 16 && IMC < 17) {
    return "Magreza moderada";
  }
  else if (IMC >= 17 && IMC < 18.5) {
    return "magreza leve";
  }
  else if (IMC >= 18.5 && IMC < 25) {
    return "Saudável";
  }
  else if (IMC >= 25 && IMC < 30) {
    return "Sobrepeso";
  }
  else if (IMC >= 30 && IMC < 35) {
    return "Obesidade Grau I";
  }
  else if (IMC >= 35 && IMC < 40) {
    return "Obesidade Grau II (considerada severa)";
  }
  else if (IMC >= 40) {
    return "Obesidade Grau III (considerada mórbida)";
  }


}    