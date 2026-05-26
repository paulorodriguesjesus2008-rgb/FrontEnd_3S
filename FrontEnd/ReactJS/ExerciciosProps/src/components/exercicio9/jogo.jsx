import "./jogo.css";
import people from "../../assets/vite.svg"

const Jogo = ({nome, plataforma, preco, imagem}) => {
    return (
        <p className="jogo">
            Nome: {nome} <br />
            Plataforma: {plataforma} <br />
            Preço: R${preco.toFixed(2)} <br />
            Imagem: <img className="img-jogo" src={people} alt="foto do jogo"/>
        </p>
    );
}

export default Jogo