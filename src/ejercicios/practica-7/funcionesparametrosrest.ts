/**Practica 7: Funciones con Parámetros Rest
 * Escribe una función crearListaDeCompra que tome un número indefinido de argumentos de tipo string que representan los 
 * artículos de la lista de compra. La función debe devolver un objeto que contenga los artículos como 
 * propiedades con valores booleanos que indiquen si el artículo ha sido comprado (inicialmente false para todos).
 */

/**
 * Función que crea una lista de compra con los artículos recibidos como parámetros.
 * @param articulos
 * @returns object
 * @example
 * crearListaDeCompra("Leche","Pan","Huevos","Azucar","Sal")
 * // {Leche: false, Pan: false, Huevos: false, Azucar: false, Sal: false}
 * 
 */
 

const crearListaDeCompra = (...articulos: string[]): object => {
    const listaDeCompra:{[articulo:string]:boolean} = {};
    articulos.map(articulo => listaDeCompra[articulo] = false);
    return listaDeCompra;
}

console.log(crearListaDeCompra("Leche","Pan","Huevos"));
console.log(crearListaDeCompra("Leche","Pan","Huevos","Azucar","Sal","Pasta","Arroz","Aceite"));

export {};