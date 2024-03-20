/**
 * Ejercicio 3: Interfaz para Arrays de Objetos
Objetivo: Utiliza interfaces para crear un arreglo de objetos que representen empleados, cada uno con un nombre, ID y departamento.
 */

interface Empleado {
    nombre: string;
    id: number;
    departamento: string;
}

let empleados: Empleado[] = [
    { nombre: 'Gregory', id: 1, departamento: 'TI' },
    { nombre: 'Vladimir', id: 2, departamento: 'Investigaciones' },
    { nombre: 'Lizardo', id: 3, departamento: 'Operaciones' },
    { nombre: 'Yusmilka', id: 4, departamento: 'Contabilidad' }
];

console.log(empleados);