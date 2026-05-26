import { useEffect, useState } from "react";
import "./produtospage.css";
import imagemProduto from "/images/hero.png"
import axios from "axios";
import api from "../../Services/services";

export const ProdutosPage = () => {
    const [listaProdutos, setListaProdutos] = useState([])

    // states
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("hero.png");
    const [editar, setEditar] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        getDados();
    }, []);

    const getDados = async () => {
            try {
                const retornoAPI = await api.get("/produtos")
                const dados = await retornoAPI.data;
                setListaProdutos(dados); // Guarda os dados no state
            } catch (error) {
                console.log(error);
            }
        };

    const cadastrarProduto = async (e) => {
        e.preventDefault() // Não deixa o formulário ser postado

        // Validar os dados
        if (
            titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco)
        ) {
            alert("Preencha todos os campos corretamente");
            return false;
        }

        // Cadastrar na api
        const objProduto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }

        console.log(objProduto);
        const retornoAPI = await axios.api("/produtos", objProduto);
        const produtoCadastrado = await retornoAPI.data;
        setListaProdutos([...listaProdutos, produtoCadastrado]);

        //limpa o formulario apos o produto ser cadastrado
        limparFormulario()
    };

    function limparFormulario() {
        setId(0);
        setEditar(false);
        setTitulo("");
        setDescricao("");
        setPreco(0);
    }

    const deletar = async (id) => {
        try {
            // fazer o fetch para apagar
            // const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
            //     method: "delete",
            // });

            const retornoAPI = await api.delete(`/produtos/${id}`)
            console.log(retornoAPI);

            const novaLista = listaProdutos.filter((prod) => {
                return prod.id != id;
            })

            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso!");
                setListaProdutos(novaLista); // atualiza a lista no state
            } else {
                alert("Erro ao cadastrar o produto");
            }
        } catch (error) { }
    };

    const editarProduto = async (e) => {
        e.preventDefault()

        // validar formulário
        if (
            titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco)
        ) {
            alert("Preencha todos os campos corretamente");
            return false;
        }

        // criar o objeto Cadastro
        const objProduto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        };

        try {
            // chamar o fetch com o verbo PUT
            const retornoAPI = await api.put(`/produtos/${id}`, objProduto);

        if (retornoAPI.status == 200) {
            getDados() 
            limparFormulario()
            setEditar(false)

        } else {
            alert("Erro ao carregar os dados")
        }

        } catch (error) {
            alert("Deu erro ao alterar os dados, possível servidor fora do ar!")
        }
    };

    return (
        <>
            <section className="container__produtos">
                <form className="formulario__cds" onSubmit={editar ? editarProduto : cadastrarProduto}>

                    <h1>Cadastrar Produto</h1>

                    <div className="campo">
                        <label>Nome do produto</label>

                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div className="campo">
                        <label>Descrição</label>

                        <textarea
                            placeholder="Descrição do produto"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="campo">
                        <label>Preço</label>

                        <input
                            type="number"
                            placeholder="R$"
                            value={isNaN(preco) ? 0 : preco}
                            onChange={(e) => setPreco(Number(e.target.value))}
                        />
                    </div>

                    <div className="campo">
                        <label>Imagens do produto</label>

                        <label className="upload__imagem">
                            Clique aqui para adicionar as imagens do produto

                            <input
                                type="file"
                                multiple
                                onChange={(e) => setImagem("hero.png")}
                            />
                        </label>
                    </div>

                    <button>
                        {editar ? "Salvar edição" : "Cadastrar"}
                    </button>
                    {/* só aparece a função quando clicar em editar */}
                    {editar && (
                        <button onClick={() => {
                            setEditar(false);
                            limparFormulario();
                        }}>
                            Cancelar
                        </button>
                    )}

                </form>
            </section>

            <section className="produtos__cadastrados">
                <div className="linha__pdt">
                    {listaProdutos.map((p) => {
                        return (
                            <article className="produto__cartao" key={p.id}>
                                <img src={imagemProduto} alt={p.titulo} />

                                <div className="produto__infos">
                                    <h3>{p.titulo}</h3>
                                    <p>{p.descricao}</p>
                                    <span>R$ {p.preco}</span>

                                    {/* Apagar */}
                                    <a href="" onClick={(e) => {
                                        e.preventDefault()
                                        deletar(p.id)
                                    }}>
                                        Apagar
                                    </a>

                                    {/* Editar */}
                                    <a href="" onClick={(e) => {
                                        e.preventDefault();

                                        // preenche o formulário
                                        setTitulo(p.titulo);
                                        setDescricao(p.descricao);
                                        setPreco(p.preco);
                                        setEditar(true);

                                        setId(p.id)
                                    }}>
                                        Editar
                                    </a>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    );
}