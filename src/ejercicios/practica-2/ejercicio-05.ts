/**
 * Ejercicio 5: Interfaz con Métodos
Objetivo: Define una interfaz para un objeto "CuentaBancaria" que incluya propiedades para el saldo 
y un método para depositar dinero en la cuenta.
 */

interface CuentaBancaria{
    saldo: number;
    depositar:(monto:number)=>void;
}