//ponerle estilo a JSX
import'./primercomponenete.css'

//variables por fuera de la fncion
/*const string='variable tipo string'
const number=123255
const array=['GTA ','L4D2 ','CSGO ', 154]
const boolean=true
const funcion=()=>1+98
//no se pueden mandar objetos en un hijo de react
const objeto={nombre:'martin',edad:'48'}
const fecha=new Date()


export const PrimerComponente = () => {
  return (
    //FRAGMENTS
    <>
        <h1>Variables en JSX</h1>
        <h3>Variable tipo String</h3> <p>{string}</p>
        <h3>Variable tipo number</h3> <p>{number}</p>
        <h3>Variable tipo array</h3> <p>{array}</p>
        <h3>Variable tipo function</h3> <p>{funcion()}</p>
        <h3>Variable tipo boolean</h3> <p>{boolean}</p>
    </>

  )
}






//PROPS:mecanismos para pasar informacion entre componenetes pedres e hijos 
//son objetos que tienen valor entre {} en el main.jsx cuando llamemos a
//los props para pasarlos como numbers
    //rafc
export const PrimerComponente = ({titulo,subtitulo}) => {
    console.log(titulo)
    console.log(subtitulo)
  return (
    <>
        <h1>{titulo}</h1>
        <h1>{subtitulo}</h1>
    </>
  )
}
//para ponerve valor de obligacion a tus props
import PropTypes from 'prop-types'
PrimerComponente.prototype={
    titulo:PropTypes.string.isRequired,
    subtitulo:PropTypes.number.isRequired
}*/








//EVENTOS:son mecanimos por los cuales los comonenete reaccionan 
//a la accion de los usuarios



