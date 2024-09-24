import { Producto } from "./Producto";

export class Tienda {
    private productos: Producto[] = [];

    constructor(){
        const productosGuardados = JSON.parse(localStorage.getItem("productos") || "[]");

        //REconvertir los datos que tenemos en el localStorage a instancias de Producto
        this.productos = productosGuardados.map((producto: Producto)=>
            new Producto(producto.id, producto.nombre, producto.precio, producto.cantidad));
    }

    agregarProducto(producto:Producto){
        this.productos.push(producto);
        this.refrescarLocal();
    }

    /*
    Guardamos todos los elementos de this.productos dentro del local storage key productos
    */
    refrescarLocal(){
        //Este guardado lo que hace es actualizar la lista de productos en el localstorage
        localStorage.setItem('productos',JSON.stringify(this.productos));
    }

    listarProductos(){
        return this.productos;
    }
}