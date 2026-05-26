import "./pessoa.css";
import people from "../../assets/vite.svg";

const Pessoa = ({ nome, idade, cidade, foto }) => {
    return (
        <div className="pessoa">
            <p>
                Nome: {nome} <br />
                Idade: {idade} <br />
                Cidade: {cidade} <br />
            </p>
            <img
                className="foto-city"
                src={foto}
                alt={nome}
            />
        </div>
    );
}

export default Pessoa;