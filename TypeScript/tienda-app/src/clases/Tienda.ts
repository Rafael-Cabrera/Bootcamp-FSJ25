import { Producto } from "./Producto";

export class Tienda {
    private productos: Producto[] = [];

    constructor(){
        const productosGuardados = JSON.parse(localStorage.getItem("productos") || "[]");

        //REconvertir los datos que tenemos en el localStorage a instancias de Producto
        /*
        Esta línea de código está utilizando el método "map" para transformar un array llamado productosGuardados:
        Contexto: this.productos sugiere que la línea está dentro de una clase y se está asignando un valor a la 
        propiedad productos del objeto actual.
        productosGuardados: Es un array que contiene elementos (en este caso, objetos de tipo Producto).
        Método map: Este método crea un nuevo array aplicando una función a cada elemento del array original. 
        En este caso, se pasa una función que toma un producto.
        Función de transformación:
        Se define una función de flecha (producto: Producto) => ... que recibe un objeto de tipo Producto.
        Dentro de la función, se crea una nueva instancia de Producto usando el constructor new Producto(...), 
        pasando las propiedades id, nombre, precio y cantidad del objeto original.
        Resultado: Al final, this.productos contendrá un nuevo array de instancias de Producto, donde cada instancia 
        se ha creado a partir de los datos de los objetos en productosGuardados.
        En resumen, esta línea de código transforma un array de productos guardados en un nuevo array de instancias de la 
        clase Producto.
        */
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