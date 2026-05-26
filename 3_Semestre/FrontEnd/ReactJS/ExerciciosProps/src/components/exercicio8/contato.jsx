import "./contato.css";

const Contato = ({nome, telefone, email}) => {
    return (
        <p className="contato">
            Nome: {nome} <br />
            Telefone: {telefone} <br />
            Email: {email}
        </p>
    );
}

export default Contato  