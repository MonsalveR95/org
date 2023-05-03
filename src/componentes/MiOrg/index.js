import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Manejar estados se hace utilizando una funcionalidad
    //llamada hooks
    //Acá usaremos la función useState: useState()//
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    
    //console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostar/ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // } 

    return <section className="orgSection"> 
        <h3 className="tittle">Mi Organización </h3>
        <img src="/img/add.png" alt="add" onClick = {props.cambiarMostar}/>
    </section>
}

export default MiOrg