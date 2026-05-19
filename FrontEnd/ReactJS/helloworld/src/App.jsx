import './App.css';
import Paragrafo from "./components/paragrafo/paragrafo";
import Title from "./components/title/title";
function App() {
return(


  <>
    <Title nome = "Paulo"  sobrenome = "Silva" texto="Bem vindo, sou Título"/>
    <Title texto = "Eu sou outro Título" />
    <Paragrafo textoParagrafo = "Este é o texto do parágrafo" />
  </>
   );
}

export default App;

//criar um componente Title.jsx