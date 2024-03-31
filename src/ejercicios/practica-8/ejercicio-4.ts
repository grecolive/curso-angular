/**
 * Ejercicio 4: Desestructuración en Parámetros de Función
Escribe una función que acepte un objeto representando un coche y
utilice la desestructuración en los parámetros para extraer y imprimir la marca y el modelo del coche.
 */

const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 }; 
// Escribe una función que utilice la desestructuración para extraer la marca y el modelo 
// Llama a la función con el objeto coche

const imprimirCoche = ({marca,modelo}:{marca:string,modelo:string}):void => {
    console.log(`Marca: ${marca}, Modelo: ${modelo}`);
};

console.log('Ejercicio 4: Desestructuración en Parámetros de Función');
console.log('_____________________________');
imprimirCoche(coche); // Marca: Toyota, Modelo: Corolla
console.log('_____________________________');
export {};