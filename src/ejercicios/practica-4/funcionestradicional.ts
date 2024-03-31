/**Practica 4: Funciones Tradicionales
 * 
Requisitos de finalización
Escribe una función calcularIMC que tome dos parámetros: peso en kilogramos (tipo number) y altura en metros (tipo number). 
La función debe calcular el Índice de Masa Corporal (IMC) y 
devolver una cadena que indique la categoría de peso según el IMC calculado. */

/**
 *  Función que calcula el IMC y devuelve la categoria de peso segun el IMC calculado.
 * @param peso 
 * @param altura 
 * @returns string|undefined
 */
export function calcularIMC(peso: number, altura: number): string {
    
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