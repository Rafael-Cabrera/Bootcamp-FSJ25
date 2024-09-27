import './App.css'
import {Saludo} from './components/Saludo'

function App() {
// Comentario de una linea
/* comentario multilinea 
ingresar codigo js en el return html
{}
*/
  return (
    <>
      {/* Comentario en JS dentrol del HTML retornadoS */}
      <h1>Holiwins desde el App</h1>
      <h2>FSJ25</h2>

      {/* Llamada a un componente */}
      <Saludo/>
    </>
  )
}

export default App
