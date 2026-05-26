import "./aluno.css";
import people from "../../assets/react.svg";

const Aluno = ({nome, curso, imagem}) => {
    return (
        <p className="aluno">
            Aluno: {nome} <br />
            Curso: {curso} <br />
            Imagem: <img className="img-perfil" src={people} alt="foto de perfil do aluno"/>
        </p>
    );
}

export default Aluno