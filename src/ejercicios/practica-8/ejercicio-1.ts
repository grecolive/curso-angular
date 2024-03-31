/**
 * Ejercicio 1: Desestructuración Básica de Arreglos
Dado el siguiente arreglo de colores, utiliza la desestructuración para asignar 
los tres primeros colores a variables individuales y luego imprime estas variables.
 */

// Arreglo de colores
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado']; 
// Desestructura y asigna los tres primeros colores a variables // Imprime las variables

const [rojo,verde,azul] = colores;

console.log('Ejercicio 1: Desestructuración Básica de Arreglos');
console.log('_____________________________');
console.log(rojo); // Rojo
console.log(verde); // Verde
console.log(azul); // Azul

console.log('_____________________________');

export {};
