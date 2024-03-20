/**Ejercicio 1: Definir una Interfaz para un Personaje
Objetivo: Crea una interfaz para un personaje de videojuego que incluya propiedades para el nombre, puntos de vida (HP), 
habilidades (como un arreglo de strings) y el pueblo natal (opcional). */


export interface Personaje {
    nombre:string;
    puntosDeVida:number;
    habilidades:string[];
    puebloNatal?:string;
}

