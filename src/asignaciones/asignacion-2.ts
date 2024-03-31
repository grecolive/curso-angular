/**
 * Asignación: Crear una Función para Extraer y Presentar Información de un Producto
Objetivo:
    Escribir una función en TypeScript que acepte un objeto representando un producto y utilice la desestructuración para extraer ciertas propiedades de ese objeto. La función deberá imprimir una descripción del producto basada en las propiedades extraídas.

Instrucciones:
    Define una interfaz Producto que incluya las siguientes propiedades: nombre (string), precio (number), categoria (string), y stock (number).
    Crea una función llamada presentarProducto que acepte un objeto de tipo Producto como argumento.
    Dentro de la función, utiliza la desestructuración para extraer las propiedades nombre, precio, y categoria del objeto producto.
    La función deberá imprimir una frase que describa el producto, por ejemplo: "El producto [nombre] de la categoría [categoria] tiene un precio de $[precio]."
    Llama a la función presentarProducto con un objeto producto de ejemplo y verifica que la salida sea la esperada.
 */


interface Producto{
    nombre:string,
    precio:number,
    categoria:string,
    stock:number
}


const presentarProducto = (producto:Producto) :string => {
    const {nombre,precio,categoria} = producto;
    return `El producto ${nombre} tiene un precio de ${precio} y pertenece a la categoria ${categoria}`;
};

const producto:Producto = {
    nombre: "Laptop",
    precio: 1500,
    categoria: "Tecnologia",
    stock: 10
}

console.log(presentarProducto(producto));

export {};