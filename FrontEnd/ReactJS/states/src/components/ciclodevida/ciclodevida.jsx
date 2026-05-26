import { useEffect, useState } from "react";
import "./ciclodevida.css";


export default function CiclodeVida(){
    const[contador,setContador] = useState(0);
    useEffect(() => {
 console.log("Componente MONTADO");
},[])

    return (

        <>
        <h1>Contador {contador}</h1>
        <button onClick={() => {
        setContador(contador + 1);
        }}>Contador</button>
        
        </>
  )
}