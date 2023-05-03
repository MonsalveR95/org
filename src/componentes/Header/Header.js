/*crear componente en js lo puedo hacer creando una 
funcion, esta funcion me tiene que regresar un html.
Después de esto, tengo que hacer un export default con
el nombre del componente, en este caso seria Header (linea 11). 
Despues de hacer esto, voy al archivo app.js y escribo al principio
del codigo lo sgte import Header from './componentes/header/header.js';
https://www.figma.com/file/g0lPfF6MnBImDq7ube3STz/Intro-a-React-Org?node-id=134-128&t=kPfBPvB7uiAfqbNa-0
*/

import "./Header.css"


function Header(){
    return <header className = "header">
                 <img src="/img/header.png" alt="Org" />
            </header>
}

export default Header