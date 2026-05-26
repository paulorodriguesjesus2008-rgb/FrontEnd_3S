// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./perfil.css"

export const Perfil = ({nome, idade, profissao}) => {

return (

 <article>
       Nome: {nome} <br />
        Idade: {idade.toFixed()} <br />
        Profissão: {profissao}

        </article>

)

}
export default Perfil

 