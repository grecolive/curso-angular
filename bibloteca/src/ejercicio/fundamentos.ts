/**
 * Objetivo General
Desarrollar una aplicación sencilla en TypeScript que aplique tipos básicos, objetos, 
arrays y funciones básicas para consolidar tu comprensión de estos conceptos fundamentales.

Contexto Imagina que estás construyendo una pequeña sección de un sistema de gestión para una biblioteca. 
Este sistema debe permitir registrar nuevos libros, buscar libros por título y listar todos los libros disponibles.
 */

interface Libro{
    titulo: string,
    autor: string,
    anioPublicacion: number,
    estaDisponible: boolean
}

let bibloteca: Libro[] = [];

const agregarLibro = (titulo: string, autor: string, anioPublicacion: number, estaDisponible: boolean): void => {
    let libro: Libro = {titulo,autor,anioPublicacion,estaDisponible};
    bibloteca.push(libro);
    console.log("Libro Agregado Correctamente", titulo);
}

const buscarLibroPorTitulo = (titulo: string): Libro[] =>  bibloteca.filter(libro => libro.titulo === titulo);

const listarLibros = (): void => {
    bibloteca.map(libro =>{console.log(libro);});
}

agregarLibro("El Hobbit", "J.R.R. Tolkien", 1937, true);
agregarLibro("1984", "George Orwell", 1949, false);

console.log("Listando  Encontrados en la Consola");
const libro = buscarLibroPorTitulo("El Hobbit");
console.log(libro);

console.log("Listando Libros en la Consola");
listarLibros();