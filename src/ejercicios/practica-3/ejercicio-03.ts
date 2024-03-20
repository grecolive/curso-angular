/**
 * Ejercicio 3: Valor por Defecto para Parámetros
Objetivo: Desarrolla una función que tome dos números como parámetros, 
con el segundo parámetro teniendo un valor por defecto de 10. La función debe retornar la multiplicación de ambos números.
 */

export const multiplicacion = (x:number, y:number = 10):number => x * y;
console.log(multiplicacion(2, 3));
