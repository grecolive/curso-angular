/**Practica 5: Funciones Anónimas y Arrow Functions

Convierte la función calcularIMC en una arrow function y asigna la función anónima resultante a una variable llamada calcularIMCArrow. */

/**
 *  Función que calcula el IMC y devuelve la categoria de peso segun el IMC calculado.
 * @param peso 
 * @param altura 
 * @returns string|undefined
 */
export const calcularIMCArrow = (peso: number, altura: number): string => {
    
    let imc:number = peso / Math.pow(altura, 2);

    if(imc < 18.5){
        return "Bajo peso";
    }else if(imc >= 18.5 && imc < 24.9){
        return "Peso saludable";
    }else if(imc >= 25 && imc < 29.9){
        return "Sobrepeso";
    }else if(imc >= 30){
        return "Obesidad";
    }
    
    return "Error";
}