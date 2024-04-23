//Leer dia y mes de nacimiento y calcular signo zodíaco//

let dia = parseInt(prompt("ingrese el dia de su nacimiento"));
let mes = parseInt(prompt("ingrese el mes de su nacimiento"));
let signo = '';

switch (mes) {
    case 1:
        if (dia < 22){
            signo = 'capricornio';
        }else{
            signo = 'acuario';
        }
        break;
    case 2:
        if (dia < 22){
            signo = 'acuario';
        }else{
            signo = 'picis';
        }
        break;
    case 2:
        if (dia < 22){
            signo = 'picis';
        }else{
            signo = 'aries';
        }
        break;
    default:
        break;
}
document.write('<h1>tu signo es' + signo + '</h1>');
alert('tu signo es ' + signo);

// Escribir los números enteros entre 10 y 20 
// Escriba los numeros pares de 0 al 20.
// Escribir los multiplos de 5   de   1 al 50
// Escribir los numeros del 100 al 1
// Escrbir los números pares del 20 al 10
// tabla de multiplicar de n
/*
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21

7 x 10 = 30
*/
// Leer numeros hasta que ingrese un 0 

//Programar la funcion calcularTablaMultiplicar(n)
//Programar la funcion sumar(a,b){
//Programar la funcion potencia()

// Validar que la edad de una persona se> 0 y