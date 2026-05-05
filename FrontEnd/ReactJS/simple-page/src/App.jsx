import './App.css';

function App() {

  return(
  
        <nav className="menu">
       <a href="#" className="menu__item" >Home</a>
       <a href="#" className="menu__item" >Quem Somos</a>
       <a href="#" className="menu__item" >Contato</a>
       <a href="#" className="menu__item menu__item--success" >Entrar</a>
       <a href="#" className="menu__item menu__item--button-default " >Cadastrar</a>

          {/* <!-- componente/bloco --> */}
      <div class="card-perfil">
        {/* <!-- elemento/element --> */}
      {/* <img class="card-perfil__image" src="./images/neymar perfil.webp" alt="foto de perfil do usuário"> */}
      </div>
       
      </nav>  
  );
}

export default App;