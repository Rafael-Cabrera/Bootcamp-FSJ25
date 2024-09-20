import { Producto } from "./Producto";

export class Tienda {
    private productos: Producto[] = [];

    constructor(){
        this.productos = JSON.parse(localStorage.getItem("productos") || "[]");
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
}