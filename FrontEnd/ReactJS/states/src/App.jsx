
import { useState } from "react";
import  Contador  from "./components/contador/contador";
import { CadFruta } from "./components/cadFruta/cadfruta";
import CiclodeVida from "./components/ciclodevida/ciclodevida";


function App () {
  // objeto privado
  const [nome, setNome] = useState("Google")
  const [mostrar, setMostrar] = useState(true)

  function trocarTexto() {
    setNome("Microsoft")
  }

  function fuiAbandonado() {
    setNome("Input foi abandonado :(")
  }

  return (
    <>
    {/* <h1>{nome} Page</h1>
    <button onClick={trocarTexto}>Mudar Texto</button>
    <button onClick={() => {
      return setNome("Yahoo")
    }}>Mudar Texto</button> */}

    <br />
    {/* evento - evento disparado: change */}
    {/* target - quem disparou o evento change */}
    {/* value - valor do input que disparou o evento change */}
    {/* <input type="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}/> */}

    {/* <Contador />
    <br /><br />
    <p>Lorem ipsum <strong>{nome}</strong> dolor sit amet</p> */}
       {/* <CadFruta /> */}

       <button onClick = {() => {

        setMostrar(!mostrar);
       }}> Mostrar / Ocultar</button>

     {mostrar && <CiclodeVida />}
    </>
    
  );
}

export default App;