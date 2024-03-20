/**
 * Ejercicio 2: Parámetros Opcionales
Objetivo: Escribe una función que tome dos números como argumentos; el segundo número debe ser opcional. 
Si el segundo número no se proporciona, simplemente devuelve el primer número.
 */

export const suma = (x: number, y?: number): number => y ? x + y : x;

console.log(suma(4, 6));