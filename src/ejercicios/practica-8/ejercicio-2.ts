/**
 * Ejercicio 2: Desestructuración con Omisión de Elementos
Tienes un arreglo con información sobre un libro. Utiliza la desestructuración para extraer el título y 
el año de publicación del libro, omitiendo el autor.
 */

const libroInfo = ['Cien años de soledad', 'Gabriel García Márquez', 1967]; 
// Desestructura y asigna el título y el año a variables, omitiendo el autor // Imprime el título y el año
const [titulo, , anio] = libroInfo;

console.log('Ejercicio 2: Desestructuración con Omisión de Elementos');
console.log('_____________________________');
console.log(titulo); // Cien años de soledad
console.log(anio); // 1967
console.log('_____________________________');

export {};