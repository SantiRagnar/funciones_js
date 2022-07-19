"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/
function generarInvitados(){
    let nom1 = prompt('Ingrese el primer nombre');
    let nom2 = prompt('Ingrese el segundo nombre');
    let nom3 = prompt('Ingrese el tercer nombre');

    return nom1 + nom2 + nom3;
}

// Definir y crear la función antes de esta llamada
let invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)