import { useState } from "react"
import { UserList } from "./components/UserList"

export const UsersApp = () => {
    const[endPoint,setEndPoint]=useState('users')
    const handleFetch=()=>{
        setEndPoint('comments')
    }
    //estructura basica de un useEffect
    //useEffect(()=>{},[])
   
  return (
    <>
    <h1>Lista de Usuarios:</h1>
    <UserList endPoint={endPoint}></UserList>
    <button onClick={handleFetch}>Aqui se llama  ala API</button>
    </>
  )
}
