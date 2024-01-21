//EVENTOS
//ESTADO EN REACT:objeto que contiene datos y representa la informacion
//que un interfaz de usuario necesita para poder renderizarsees mutable
import { useState } from "react"

export const ContadorApp = ({value}) => {
  const[contador,setContador] = useState(value)

  const handleclick=()=>{
    setContador(contador +5 )
    console.log(value)
  } 

  return (
    <>
        <h1>Contador:</h1>
        <p>{contador}</p>
        <button onClick={handleclick}>
          Soy un boton
        </button>
    </>
  )
}
