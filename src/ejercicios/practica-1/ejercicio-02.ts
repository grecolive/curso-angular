/**Ejercicio 2: Uso de const y let
Objetivo: Practicar la declaración de variables con const y let, entendiendo cuándo utilizar cada uno. 

Declara una constante PI de tipo number y asígnale el valor 3.14.
Intenta reasignar un nuevo valor a PI y observa el error.
Declara una variable contador con let que inicialmente sea 0 y luego increméntala.
*/

const PI: number = 3.14;
PI = 3.1416; 

let contador: number = 0;
contador++;
console.log(contador); // 1
contador++;
console.log(contador); // 2
contador++;
console.log(contador); // 3
