/**
 * Ejercicio 2: Interfaz para Objetos con Propiedades Anidadas
Objetivo: Define una interfaz para un objeto que represente un libro, incluyendo propiedades para el título, el año de publicación, 
y el autor, donde el autor a su vez es un objeto con propiedades para el nombre y la nacionalidad.
 */

interface Libro {
    titulo: string;
    anioPublicacion: number;
    autor: {
        nombre: string;
        nacionalidad: string;
    }
}