// let nombre = prompt("Porfavor ingrese su nombre");

// document.write("Su nombre es "+nombre);nombre = prompt ("ingrese el nombre");
// notas = parseFloat(prompt ("ingrese su nota"));


// if (notas > 4.5) {
//     document.write(`El estudiante ${nombre} Aprobo con ${notas}`)
// }else{
//     document.write("El estudiante reprobo"+notas)
// }


// // Escribe un programa que solicite al usuario su peso en kilogramos y su altura en metros, 
// y luego calcule su Índice de Masa Corporal (IMC). El programa debe mostrar un mensaje indicando si el 
// usuario está bajo peso, peso normal, sobrepeso o obeso, según el IMC calculado.

// let peso = parseFloat(prompt("Ingrese su peso corporal en kg"));
// let altura = parseFloat(prompt("Ingrese su estatura " ));

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//     console.log("Bajo peso");
// } else if (imc >= 18.5 && imc < 25) {
//     document.write("Peso normal");
// } else if (imc >= 25 && imc < 30) {
//     document.write("Sobrepeso");
// } else {
//     document.write("obeso");
// }

// Escribe un programa que solicite al usuario tres números y luego los ordene de menor a mayor.

// let numero1 =parseInt(prompt("Ingrese el primer numero"));
// let numero2 =parseInt(prompt("Ingrese el primer numero"));
// let numero3 =parseInt(prompt("Ingrese el primer numero"));

// if (numero1 <= numero2 && numero1 <= numero3) {
//     document.write(numero1+", "+Math.min(numero2,numero3)+", "+Math.max(numero2,numero3));
// }else if(numero2 <= numero1 && numero2 <= numero3){
//     document.write(numero2+", "+Math.min(numero1,numero3)+", "+Math.max(numero1,numero3));

// }else{
//     document.write(numero3+", "+Math.min(numero1,numero2)+", "+Math.max(numero1,numero2));

// }

// Escribe un programa que solicite al usuario el monto de una compra y su edad. Si el usuario es menor de 18 años,
//  se aplicará un descuento del 10% al total de la compra. Si el usuario tiene entre 18 y 65 años
//  (inclusive), no se aplicará ningún descuento. Si el usuario tiene más de 65 años, se aplicará un descuento del 15%.

// let nombre = prompt("Ingrese su nombre");
// let compra = parseFloat(prompt("ingrese el monto de la compra"));
// let edad = parseInt(prompt("Ingrese su edad"));
// let descuento=0;
// if (edad < 18) {
    
//     descuetoo = 0.10;
// }else if (edad > 65 ) {

//     descuetoo = 0.15;
// }

// let montotal= compra -(compra * descuetoo );

// document.write("Monto a pagar es "+montotal);

// Escribe un programa que simule una calculadora avanzada que permita al usuario realizar 
// operaciones matemáticas básicas (suma, resta, multiplicación, división) y operaciones adicionales como potenciación, raíz cuadrada y logaritmo. 
// El programa debe solicitar al usuario que elija la operación deseada y luego ingresar los números necesarios para realizar la operación.

// let operación = prompt("Ingrese  la operacion a realizar");

// switch (operación) {
//     case "Suma":
//             let num1 = parseInt(prompt("Ingrese el primer numero"));
//             let num2 = parseInt(prompt("Ingrese el segundo numero"))
//             document.write("La suma es "+(num1+num2));

//         break;
//     case "resta":
//         let num3 = parseInt(prompt("Ingrese el primer numero"));
//         let num4 = parseInt(prompt("Ingrese el segundo numero"))
//         document.write("La resta es "+(num3-num4));
       
//      break;
//      case "multiplicacion":
//         let num5 = parseInt(prompt("Ingrese el primer numero"));
//         let num6 = parseInt(prompt("Ingrese el segundo numero"))
//         document.write("La multiplicacion es "+(num5*num6));
       
//      break;
//      case "division":
//         let num7 = parseInt(prompt("Ingrese el primer numero"));
//         let num8 = parseInt(prompt("Ingrese el segundo numero"))

//         if ( num8 ==0) {
            
//             document.write("No se puede dividir por cero")
//         }else{
//             document.write("La division es "(num7 / num8));

//             }

//             break;

//     default:
//         document.write("Ingrese se un numero valido")
//         break;
// }


//ciclos 
// Ejercicio 1: Imprimir números pares del 1 al 100
// Escribe un programa que imprima todos los números pares del 1 al 100.

// for (let i = 2; i < 101; i+=2) {
//     document.write(i);
    
// }

// Ejercicio 2: Suma de los primeros n números naturales
// Escribe un programa que solicite al usuario un número entero positivo n y luego calcule la suma de los primeros n números naturales.


// let numero = parseInt(prompt("Ingrese el numero "));
// let suma=0;

// for (let i = 1; i < numero ;i++) {
//     suma += i;
    
// }
// document.write("La suma de los primeros " + numero + " números naturales es: " + suma);


// Ejercicio 3: Tabla de multiplicar
// Escribe un programa que solicite al usuario un número y luego imprima la tabla de multiplicar del número ingresado del 1 al 10.


// let numero = parseInt(prompt("Ingrese el número de la tabla a multiplicar"));

// document.write("Tabla de multiplicar " + numero + "<br>");

// for (let i = 1; i <= 10; i++) {
//     document.write(numero + " X " + i + " = " + (numero * i) + "<br>");
// }

// ejemplo de cómo podrías usar ese bucle for en un array para realizar una tarea específica.
//  Supongamos que tenemos un array de números y queremos imprimir en la consola solo los elementos que están en posiciones pares:

// let numeros = [10, 20, 30, 40, 50, 60, 70];

// for (let i = 2; i < numeros.length; i += 2) {
//     const elemento = numeros[i];
//     console.log("Elemento en la posición " + i + ": " + elemento);
// }


//Declarion de arrays

// // Declaración de un array vacío
// let array1 = [];

// // Declaración de un array con valores iniciales
// let array2 = [1, 2, 3, 4, 5];

// // Declaración de un array usando la palabra clave "new"
// let array3 = new Array();
// let array4 = new Array(1, 2, 3, 4, 5);


// Acceso a los Elementos de un Array

// let numeros = [10, 20, 30, 40, 50];

// console.log(numeros[0]); // Muestra 10
// console.log(numeros[2]); // Muestra 30



// Modificación de Elementos de un Array
// let numeros = [10, 20, 30, 40, 50];

// numeros[2] = 35;
// console.log(numeros); // Muestra [10, 20, 35, 40, 50]


// Métodos de los Arrays

// push(): Agrega uno o más elementos al final del array.
// pop(): Elimina el último elemento del array y lo devuelve.
// shift(): Elimina el primer elemento del array y lo devuelve.
// unshift(): Agrega uno o más elementos al principio del array.
// splice(): Permite agregar, eliminar o reemplazar elementos en cualquier posición del array.

// let frutas = ['manzana', 'naranja', 'pera'];

// frutas.push('banana'); // Agrega 'banana' al final del array
// console.log(frutas); // Muestra ['manzana', 'naranja', 'pera', 'banana']

// frutas.pop(); // Elimina 'banana' del final del array
// console.log(frutas); // Muestra ['manzana', 'naranja', 'pera']


// Iteración sobre un Array
// let numeros = [1, 2, 3, 4, 5];

// // Usando un bucle for
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// // Usando un bucle for-of
// for (let numero of numeros) {
//     console.log(numero);
// }

// // Usando el método forEach()
// numeros.forEach(function(numero) {
//     console.log(numero);
// });
