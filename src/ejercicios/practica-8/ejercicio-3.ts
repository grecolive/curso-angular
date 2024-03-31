/**
 * Desestructuración de Objetos Anidados
Dado el siguiente objeto que representa un estudiante, 
utiliza la desestructuración para extraer el nombre del estudiante y el nombre de la universidad.
 */

const estudiante = { nombre: 'Ana', edad: 22, universidad: { nombre: 'Universidad de Buenos Aires', ciudad: 'Buenos Aires' } }; 
// Desestructura y asigna el nombre del estudiante y el nombre de la universidad a variables 
// Imprime el nombre del estudiante y el nombre de la universidad
const {nombre:nombreEstudiante, universidad:{nombre: nombreUniversidad}} = estudiante;

console.log('Ejercicio 3: Desestructuración de Objetos Anidados');
console.log('_____________________________');
console.log(nombreEstudiante); // Ana
console.log(nombreUniversidad); // Universidad de Buenos Aires
console.log('_____________________________');

export {};
