"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/
function generarInvitados(){
    let nom1 = prompt('Ingrese el primer nombre');
    let nom2 = prompt('Ingrese el segundo nombre');
    let nom3 = prompt('Ingrese el tercer nombre');

    console.log(nom1);
    console.log(nom2);
    console.log(nom3);
}
// Definir y crear la función antes de esta llamada
generarInvitados();