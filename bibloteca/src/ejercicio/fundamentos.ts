/**
 * Objetivo General
Desarrollar una aplicación sencilla en TypeScript que aplique tipos básicos, objetos, 
arrays y funciones básicas para consolidar tu comprensión de estos conceptos fundamentales.

Contexto Imagina que estás construyendo una pequeña sección de un sistema de gestión para una biblioteca. 
Este sistema debe permitir registrar nuevos libros, buscar libros por título y listar todos los libros disponibles.
 */

/*
Interface para un Libro
*/
interface Libro{
    titulo: string,
    autor: string,
    anioPublicacion: number,
    estaDisponible: boolean
}

//Creamos un arreglo para la bibloteca que almacenara los libro
let bibloteca: Libro[] = [];

//funcion que recibe como parametro titulo, autor, anioPublicacion, estaDisponible de un libro para agrear al array bibloteca
const agregarLibro = (titulo: string, autor: string, anioPublicacion: number, estaDisponible: boolean): void => {

    //Creamos una variable para crear un objeto de un Libro
    let libro: Libro = {titulo,autor,anioPublicacion,estaDisponible};
    
    //Agregamos el libro al arreglo bibloteca que recibe libros
    bibloteca.push(libro);

    console.log("Libro Agregado Correctamente", titulo);
}

//buscamos los libros por titulo dentro de nuestro arreglo utilizando la funcion filter
const buscarLibroPorTitulo = (titulo: string): Libro[] =>  bibloteca.filter(libro => libro.titulo === titulo);

//Listamos todo los libro almacenados en nuestro arreglo
const listarLibros = (): void => {
    bibloteca.map(libro =>{console.log(libro);});
}

/* Realizamos las pruebas de las funciones */
agregarLibro("El Hobbit", "J.R.R. Tolkien", 1937, true);
agregarLibro("1984", "George Orwell", 1949, false);

console.log("Listando  Encontrados en la Consola");
const libro = buscarLibroPorTitulo("El Hobbit");
console.log(libro);

console.log("Listando Libros en la Consola");
listarLibros();