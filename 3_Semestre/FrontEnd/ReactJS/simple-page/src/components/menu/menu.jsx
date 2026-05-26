  import "./menu.css";
import Cardperfil from "../cardperfil/cardperfil";
  function Menu(){

    return(


        <nav className="menu">
       <a href="#" className="menu__item" >Home</a>
       <a href="#" className="menu__item" >Quem Somos</a>
       <a href="#" className="menu__item" >Contato</a>
       <a href="#" className="menu__item menu__item--success" >Entrar</a>
       <a href="#" className="menu__item menu__item--button-default " >Cadastrar</a>

       {/*colocar o cardperfil aqui!!! */}
       <Cardperfil/>
       
      </nav>  


    );

  }
  

  export default Menu;
  
  
  
  