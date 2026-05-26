import "./itemloja.css";

const ItemLoja = ({ nome, preco, categoria, estoque }) => {
    let alert;

    if (estoque > 0) {
        alert = <p>Produto disponível</p>;
    } else {
        alert = <p>Produto indisponível</p>;
    }

    return (
        <div className="item">
            <p>
                Nome: {nome} <br />
                Preço: R$ {preco.toFixed(2)} <br />
                Categoria: {categoria} <br />
                Estoque: {estoque}
            </p>

            {alert}
        </div>
    );
}

export default ItemLoja;
