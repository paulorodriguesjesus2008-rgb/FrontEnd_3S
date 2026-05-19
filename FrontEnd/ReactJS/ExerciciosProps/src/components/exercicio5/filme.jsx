// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.

// Crie pelo menos 3 filmes diferentes.

import "./filme.css";

const Filme = ({titulo, ano, genero, nota}) => {
    return (
        <p className="filme">
            Título: {titulo} <br />
            Ano: {ano} <br />
            Gênero: {genero} <br />
            Nota: {nota.toFixed(2)}
        </p>
    );
}

export default Filme