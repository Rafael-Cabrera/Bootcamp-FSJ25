import { Producto } from './clases/Producto';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestion de Tiendita</h1>

    <form id="formProducto">
      <section>
        <label>Nombre de producto:</label>
        <input type="text" id="nombre" name="nombre" placeholrder="Ingresa el nombre del producto">
      </section>

      <section>
        <label>Precio:</label>
        <input type="text" id="precio" name="precio" placeholder="Ingresa el precio">
      </section>

      <section>
        <label>Cantidad:</label>
        <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa la cantidad">
      </section>
      
      <button type="submit">Agregar producto</button>
    </form>
  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Esto es texto desde el p";
const form = document.getElementById("formProducto") as HTMLFormElement;

form.addEventListener("submit", (e:SubmitEvent)=> {
  e.preventDefault();
  console.log('Holis!!');

  const id = Date.now();
  //Seleccionamos los elementos a controlar  y retiraos su valor
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
  const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);

  console.log(id);
  console.log(nombre);
  console.log(precio);
  console.log(cantidad);

  let productito = new Producto(1, nombre, precio, cantidad);
  console.log(productito);

  localStorage.setItem('productos',JSON.stringify(productito));

});
