/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
let cantinv = 0;
function generarInvitados(){
    if(cantinv == 3){
        let nom1 = prompt('ingrese el nombre del invitado');
        let nom2 = prompt('ingrese el nombre del invitado');
        let nom3 = prompt('ingrese el nombre del invitado');
    }else if(cantinv == 2){
        let nom1 = prompt('ingrese el nombre del invitado');
        let nom2 = prompt('ingrese el nombre del invitado');
    }else{
        let nom1 = prompt('ingrese el nombre del invitado');
    }
}