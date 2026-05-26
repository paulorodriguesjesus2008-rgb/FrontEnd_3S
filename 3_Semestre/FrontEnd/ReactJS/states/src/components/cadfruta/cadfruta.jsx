import { useState } from "react";
import "./cadfruta.css";

export function CadFruta() {

   

    const [fruta, setFruta] = useState("")// criar um state string vazia
    const [quantidade, setQuantidade] = useState(0)// criar um state string vazia
    const [arrFrutas, setArrFrutas] = useState([

        {id: 1, nome:"Abacaxi",quantidade: 10},
        {id: 2, nome:"Mamão", quantidade: 20},
    ])// cria um state array vazio

// adicionar  mais um campo para cadastrar na quantidade de frutas
// cadastre a fruta com a quantidade

function Cadastrar(e) {
    e.preventDefault();
    alert("Função Cadastrar OK!!")
    setArrFrutas([
        ...arrFrutas, {id: Date.now(), nome : fruta, quantidade : quantidade}
    ]);
   
    LimparFormulario()

    return false;
}


function LimparFormulario() {
    setFruta("")
    setQuantidade(0)   
}

    return (
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post"onSubmit={Cadastrar}>
            <fieldset className="cadastro">
                <label htmlFor="fruta" className="cadastro__rotulo">
                Digite o nome da Fruta </label>
                <input
                    type="text"
                    id="fruta"
                    className="cadastro__entrada"
                    placeholder="Digite o nome da fruta"
                    onChange={(e)=> {
                    setFruta(e.target.value)
                    }}
                />
                <label htmlFor="quantidade" className="cadastro__rotulo">Digite a quantidade</label>
                <input
                    type="number"
                    id="qtd"
                    className="cadastro__entrada"
                    placeholder="Digite a quantidade"
                    onChange={(e)=> {
                        // q = parseInt(e.target.value)
                        setQuantidade(parseInt(e.target.value))
                    }}
                />
                <button type="submit" className="cadastro__btn-cadastrar"> Cadastrar</button>
                <br />
                <label htmlFor="">{fruta}</label>
            </fieldset>
         </form>
            <ul className="listagem">
             {arrFrutas.map((f) =>{
            return (
              <li key={f.id}>
                Fruta: {f.nome} | Quantidade: {f.quantidade}
                </li>
            );
            })}
            </ul>
        </section>
    );
}

// export default CadFruta