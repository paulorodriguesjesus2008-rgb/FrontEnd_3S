import "./cadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useState, useEffect } from "react"
import api from "../../Services/services";
import { Alerta } from "../../components/alerta/Alerta";

const CadastroFilme = () => {
    // States
    const [valor, setValor] = useState("");
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState(0);

    const [listaGenero, setListaGenero] = useState([
        { id: 1, nome: "Ação" },
        { id: 2, nome: "Comédia" },
        { id: 3, nome: "Suspense" },
        { id: 4, nome: "Terror" }
    ]);

    const [listaFilmes, setListaFilmes] = useState([
        {
            titulo: "Velozes e Furiosos 9",
            id: "O8Na7aysoc8",
            genero: { nome: "Ação" }
        },
        {
            titulo: "Gente Grande",
            id: "gkw3RN8sa0",
            genero: { nome: "Comédia" }
        },
    ])

    const limparFormulario = () => {
        setValor("");
        setEditar(false)
        setIdEditar(0)
    };

    const excluirFilme = async (item) => {

        // Validação
        const result = await Alerta({
            title: "Cadastro de Filme",
            text: `Deseja realmente apagar o filme ${item.titulo}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        });

        // Se cancelar
        if (!result.isConfirmed) {
            return false;
        }

        try {

            // Deleta filme
            const retornoAPI = await api.delete(`/Filmes/${item.id}`);

            // Verifica sucesso
            if (retornoAPI.status == 200 || retornoAPI.status == 204) {

                console.log(retornoAPI);

                Alerta({
                    title: "Cadastro de Filme",
                    text: "Filme apagado com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK",


                });

                // Atualiza lista
                getFilmes();
            }

        } catch (error) {

            console.log(error);

            Alerta({
                title: "Cadastro de Filme",
                text: "Erro ao excluir filme",
                icon: "error"
            });
        }
    };

    const preEditar = (item) => {
        setIdEditar(item.id);
        setValor(item.titulo);
        setEditar(true);
        console.log(item);
    };

    const cadastrarFilme = async (e) => {

        e.preventDefault();

        // Validação
        if (valor.trim().length == 0) {

            Alerta({
                title: "Cadastro de Filme",
                text: "Filme deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "OK",

            });

            return false;
        }

        // Objeto do cadastro
        const objCadastro = {
            titulo: valor,
            genero: {
                nome: "Ação"
            }
        };

        try {

            // Cadastra na API
            const retornoAPI = await api.post("/Filmes", objCadastro);

            // Verifica sucesso
            if (retornoAPI.status == 201) {

                Alerta({
                    title: "Cadastro de Filme",
                    text: `${objCadastro.titulo} cadastrado com sucesso!`,
                    icon: "success",
                    confirmButtonText: "OK",
                });

                limparFormulario();

                // Atualiza lista
                getFilmes();

            } else {

                Alerta({
                    title: "Cadastro de Filme",
                    text: "Houve algum problema ao cadastrar!",
                    icon: "warning"
                });
            }

        } catch (error) {

            console.log(error);

            Alerta({
                title: "Cadastro de Filme",
                text: "Erro na chamada da API",
                icon: "error"
            });
        }
    };

    const editarFilme = async (e) => {

        e.preventDefault();

        const objEditar = {
            titulo: valor
        };

        try {
            const retornoAPI = await api.put(
                `/Filmes/${idEditar}`,
                objEditar
            );

            if (retornoAPI.status == 200) {

                Alerta({
                    title: "Cadastro de Filme",
                    text: "Filme editado com sucesso!",
                    icon: "success"
                });

                limparFormulario();

                getFilmes();

            } else {

                Alerta({
                    title: "Cadastro de Filme",
                    text: "Algum problema aconteceu ao editar",
                    icon: "warning"
                });
            }

        } catch (error) {

            console.log(error);

            Alerta({
                title: "Cadastro de Filme",
                text: "Erro ao chamar a API",
                icon: "error"
            });
        }
    };

    useEffect(() => {
        getFilmes();
    }, []);

    const getFilmes = async () => {

        try {

            const retornoAPI = await api.get("/Filmes");

            const dados = retornoAPI.data;

            setListaFilmes(dados);

        } catch (error) {

            console.log(error);

            Alerta({
                title: "Cadastro de Filme",
                text: "Erro ao retornar os dados!",
                icon: "error"
            });
        }
    };

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    valor={valor}
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btnEditar={editar}
                    listaGenero={listaGenero}
                />
                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade4
                    // Chama o método listaFilmes
                    lista={listaFilmes}
                    // Identifica o tipo de lista
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme