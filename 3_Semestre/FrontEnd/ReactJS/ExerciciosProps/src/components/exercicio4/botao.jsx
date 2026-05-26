// 04) Crie um componente chamado Botao que receba:
// texto
// cor
// O botão deve:
// Mostrar o texto recebido
// Alterar a cor de fundo conforme a prop cor

document.getElementById ("cpto").style.backgroundColor
// import "./botao.css"


export const Botao = ({ texto, cor }) => {
  return (
    <button style={ {backgroundColor: cor} }>
      {texto}
    </button>
  )
}

export default Botao