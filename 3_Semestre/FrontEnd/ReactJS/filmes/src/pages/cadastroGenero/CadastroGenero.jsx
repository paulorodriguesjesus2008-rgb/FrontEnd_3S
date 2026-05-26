import "./cadastroGenero.css"
import { useEffect, useState } from "react"
import { isRouteErrorResponse } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import Botao from "../../components/botao/Botao"
import api from "../../Services/services"

import Swal from "sweetalert2"; // biblioteca de alertas
import {Alerta} from "../../components/alerta/Alerta"

const CadastroGenero = () => {
    // states e variáveis
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState(0)

    const [editar, setEditar] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])

    // ciclo de vida e funções

    //POST
    const cadastrarGenero = async (e) => {
        e.preventDefault();

        if (valor.trim().length == 0) {
      Alerta ({
          title:"Cadastro de Gênero",
          text:"Gêmero deve ser preenchido antes de cadastrar!",
          icon :"warning",
          confirmButtonText:"OK",

        
          })

          console.log(retornoAlerta);

            return false;
        }

        const objCadastro = {
            nome: valor
        }

        try {
            // Cadastra na api, no endpoint do swagger
            const retornoAPI = await api.post("/Generos", objCadastro)

            if (retornoAPI.status == 201) {
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: `${objCadastro.nome} cadastrado com sucesso!`,
                    icon: "success"
                })
                // alert(`Gênero (${objCadastro.nome}) cadastrado com sucesso!`);

                limparFormulario();

                getGeneros()
            } else {
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: "Houve algum problema ao cadastrar!",
                    icon: "warning"
                })
                // alert("Houve algum problema ao cadastrar!")
            }

            // chamar o get!
        } catch (error) {
            Swal.fire({
                title: "Cadastro de Gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })
            // alert("Erro na chamada da API")
            console.log(error);
        }
    };// fim função cadastrarGenero

    // Reseta o formulario e esconde o botão
    const limparFormulario = () => {
        setValor("");
        setEditar(false)
        setIdEditar(0)
    };

    const excluirGenero = async (item) => {
        // Validação do formulário
        const result = await Alerta({
            title: "Cadastro de Gênero",
            text: `Deseja realmente apagar o gênero ${item.nome}`,
            icon: "warning", 
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",

            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        })

        if (!result.isConfirmed) {
            return false
        }
        

        // if (!confirm(`Deseja realmente apagar o gênero (${item.nome})`)) {
        //     return false;
        // }

        try {
            const retornoAPI = await api.delete(`/Generos/${item.id}`)

            if (retornoAPI.status == 204 || retornoAPI.status == 200) {
                console.log(retornoAPI);
               Alerta({
                  title : "Exclusao de Genero",
                  text : "O genero foi excluido com sucesso",
                  icon : "success",
                  confirmButtonText:"OK",

               })
                getGeneros()// atualiza a lista
            }
        } catch (error) {

        }
    };

    const preEditar = (item) => {
        setIdEditar(item.id);
        setValor(item.nome);
        setEditar(true);
        console.log(item);
    }

    const editarGenero = async (e) => {
        e.preventDefault();
        // alert(`Agora sim! Bora cadastrar: ${valor} | id: ${idEditar}`)
        // validar o formulário
        const objEditar = {
            nome: valor
        }

        // chamar a api e salvar os dados
        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            if (retornoAPI.status == 200) {
                alert("Gênero editado com sucesso!")
                limparFormulario()
                getGeneros()
            } else {
                alert("Algum problema aconteceu ao editar")
            }
        } catch (error) {
            alert("Erro ao chamar a API")
            console.log(error);
        }

        // chamar getGeneros()
    };

    useEffect(() => {
        // chamar os dados da api
        getGeneros()
    }, [])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Generos")
            const dados = retornoAPI.data
            setListaGeneros(dados)
        } catch (error) {
            alert("Erro ao retornar os dados!")
        }
    }

    // 0 jsx
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeHolder="gênero"
                    valor={valor}
                    // função que muda o state
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}
                />
            </main>
            <Lista
                tituloLista="Lista de Gêneros"
                visibilidade="none"

                // //Chama o método para validar:
                lista={listaGeneros}
                // //Identifica o tipo de lista:
                tipoLista="genero"


                funcExcluir={excluirGenero}
                funcEditar={preEditar}
            />
            <Footer />
        </>
    )
}

export default CadastroGenero