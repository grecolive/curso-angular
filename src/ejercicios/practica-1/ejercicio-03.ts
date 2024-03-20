/**Ejercicio 3: Tipos Unión
Objetivo: Entender y aplicar los tipos unión para permitir múltiples tipos en una variable.

Declara una variable identificador que pueda ser tanto number como string.
Asigna un número y luego un string a identificador. */


let identificador: number | string;
identificador = 135934582;
identificador = '988744837';

console.log(identificador); // 988744837
console.log(typeof identificador); // string
