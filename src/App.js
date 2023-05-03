import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js'
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    nombre: "Manuel Monsalve",
    puesto: "Desarrollador",
    foto: "https://github.com/MonsalveR95.png",
    equipo: "Front End",
    id: uuid(),
    fav: true
  },
  {
    nombre: "Harland Lohora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    id: uuid(),
    fav: false
  },
  {
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    foto: "https://github.com/genesysaluralatam.png",
    equipo: "Programación",
    id: uuid(),
    fav: true
  },
  {
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alurar Latam",
    foto: "https://github.com/jeanmariealuralatam.png",
    equipo: "UX y Diseño",
    id: uuid(),
    fav: false
  },
  {
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Programación",
    id: uuid(),
    fav: false
  },
  {
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    foto: "https://github.com/josedariogonzalezcha.png",
    equipo: "Innovación y Gestión",
    id: uuid(),
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([    
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
      id: uuid()
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
      id: uuid()
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
      id: uuid()
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
      id: uuid()
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
      id: uuid()
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
      id: uuid()
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
      id: uuid()
    }    
  ])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator(...)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }
  
  //darle Like
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      {/*Con esta sintaxis podemos llamar las funciones o componentes de React y todo lo que pongamos
      en las llames serán tomados como elementos JavaScript
      { Header() }
      { Esta otra forma también llama la funcion, hay que tener presente que esta
      en mayuscula y asi se deben escribir los componentes para diferenciarlos
      {<Header></Header>}*/}
      <Header />
      {/* { mostrarFormulario  ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
      }
      
      <MiOrg cambiarMostar = {cambiarMostar}/>
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
        />
        )
      }

      <Footer/>
      
    </div>
  );
}

export default App;
