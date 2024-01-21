//condicionales y terbnario: {visto ? '✔':'❌'} 
// en: <AgregarTarea agregarTarea = {setArreglo}></AgregarTarea> le enviamos informacion al hijo

import { useState } from "react"
import {AgregarTarea} from "./components/AgregarTarea"


const Items=({nombre,visto})=>{
    return(
        <li>{nombre} 
        {visto ? '✔':'❌'} 
        </li>
    )
}

export const ListadoAPP = () => {
    //Poniendo todos los "Items" un array "MAPEO"
    let listadoSecciones=[
        {id:1 ,nombre:"Programas necesarios",visto:true},
        {id:2 ,nombre:"Use de Vite" ,visto:true},
        {id:3 ,nombre:"Componenetes", visto:true},
        {id:4 ,nombre:"Variables de jsx", visto:true},
        {id:5 ,nombre:"Props", visto:true},
        {id:6 ,nombre:"customHooks", visto:false},
        {id:7 ,nombre:"Redox", visto:false},

    ]
    const[arreglo,setArreglo]=useState(listadoSecciones)
    const onAgregarTarea=(val)=>{
      let valor=val.trim()
        if(val<1) return
        const envio={
          id:arreglo.length+ 1,
          nombre:val,
          visto:false
        }
        setArreglo([...arreglo,envio])
    }
  return (
    <>
      <h1>Listado de termas del curso</h1>
      <AgregarTarea agregarTarea = {onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}        
      </ol>

    </>
  )
}
