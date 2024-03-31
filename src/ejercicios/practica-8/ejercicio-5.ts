/**
 * Ejercicio 5: Desestructuración y Renombramiento
Tienes un objeto que representa una dirección. 
Utiliza la desestructuración para extraer la calle y la ciudad, 
pero renombra las variables a nombreCalle y nombreCiudad.
 */

const direccion = { calle: 'Av. Siempre Viva', ciudad: 'Springfield', pais: 'EE.UU.' }; 
// Desestructura y renombra las variables calle y ciudad a nombreCalle y nombreCiudad 
// Imprime nombreCalle y nombreCiudad

const { calle: nombreCalle, ciudad: nombreCiudad } = direccion;

console.log('Ejercicio 5: Desestructuración y Renombramiento');
console.log('_____________________________');
console.log(nombreCalle); // Av. Siempre Viva
console.log(nombreCiudad); // Springfield
console.log('_____________________________');

export {};
