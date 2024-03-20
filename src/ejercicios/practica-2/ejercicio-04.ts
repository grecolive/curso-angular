/**
 * Ejercicio 4: Extender Interfaces
Objetivo: Crea una interfaz PersonajeExtendido que extienda de la interfaz Personaje del Ejercicio 1, 
agregando una nueva propiedad para la experiencia (xp).
 */

import { Personaje } from './ejercicio-01';

interface PersonajeExtendido extends Personaje {
    experiencia: number;
}

let personaje: PersonajeExtendido = {
    nombre: 'Link',
    puntosDeVida: 100,
    habilidades: ['Guerrero', 'Escudero', 'Arquero'],
    experiencia: 0
};

console.log(personaje);