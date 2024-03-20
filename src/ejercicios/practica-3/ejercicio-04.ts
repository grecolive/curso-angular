/**
 * Ejercicio 4: Tipos de Retorno
Objetivo: Implementa una función que reciba dos números y retorne su suma como un string.
 */

export const suma = (x: number, y: number): string => (x + y).toString();
console.log(suma(2, 3));