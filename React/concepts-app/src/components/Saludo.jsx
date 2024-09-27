import { useState } from "react";
import { Chauchis } from "./Chauchis";

// Declaracion de un componente
export const Saludo = ()=>{
  //let nombre = "Rafa";

  //Primer HOOK=> useState
  //Hook -> es una funcion prehecha para realizar x accion
  //useState(valor inicial)
  const [nombre, cambiarNombre] = useState("Rafa");

    return (
      <>
        <h3>Yo realmente estoy en el compenente saludo jejex</h3>
        <h2>Hola {nombre},cómo estás?</h2>
        <button onClick={()=>{ cambiarNombre("Rafaelito") }}>Magia</button>
        
        <Chauchis nombreUsuario={nombre}/>
      </>
    )
  }
