 import  Footer from "../../components/footer/Footer"
 import Header from "../../components/header/Header"
 import "./cadastroGenero.css"
 import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import Lista from "../../components/lista/Lista"
import api from "../../Services/services"



 const CadastroGenero = () => {

   // state e variáveis
   const [valor, setValor] = useState("")
   const [listaGeneros, setListaGeneros] = useState([])
     

     //POST 
     const cadastrarGenero = async (e) => {
        e.preventDefault();
        if (valor.trim().length ==0) {
            alert("Gênero deve ser preencido antes de cadastrar!")
           return false;  
        }
        const objCadastro ={
            nome:valor
        }
       try {
           const retornoAPI = await api.post("/Genero", objCadastro)

           if(retornoAPI.status == 201){
            alert("Gênero cadastrado com sucesso!")
            limparFormulario();
           } else{
             alert ("Houve algum problema ao cadastrar!")
           }


        } catch (error) {
        alert("Erro na chamada da API")
        console.log(error)
        }
        return false
     }
     const limparFormulario = () => {

        setValor("");
     }
     const  editarGenero  = () => {

     }
     const excluirGenero = async (item) => {
        try {
         const retornoAPI = await api.delete(`/Genero${item.idGenero}`)
         console.log(retornoAPI)
            
        } catch (error) {
            
        }
    
     };


     useEffect(() => {
       getGeneros()

     },[])

     const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            setListaGeneros(dados)
            
        } catch (error) {
           alert("Erro ao retorna os dados") 
        }
     }
     

   // ciclo de vida e funções


   // 0 jsx
return (
    <>
    <Header/>
        <main>
            <Cadastro 
            tituloCadastro=" Cadastro de Gêneros"
            visibilidade="none"
            placeholder="genêro"
            valor={valor}
            // função que muda o site
            setValor={setValor}
            funcCadastro={cadastrarGenero}
            />
            {/* <p>Gênero que vamos cadastrar <strong>{valor}</strong></p> */}

             <Lista
                    tituloLista="Lista de Gêneros"
                    // visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    // funcExcluir = {excluirGenero}
                    // funcEditar = {editarGenero}
                />



        </main>
    <Footer/>
    </>
);

 };

 
 export default CadastroGenero 