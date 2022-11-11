/* Ejercicios propuestos en la clase Ejercicios para strings
Encontrar el tamaño de la última palabra en un texto.

Encontrar el tamaño de la segunda palabra en un texto.
*/

//Solución al Ejercio propuesto con los conocimientos impartidos hasta el momento en el precurso

const text = "Mañana es viernes";
//Primera Solucción

const tPalA = text.indexOf(" ");
const tPalB = text.lastIndexOf(" ");
const tPalC = text.length;

console.log("Primera Solucción\n");
console.log("El texto a contar el tamaño por palabra es : \n"+text);
console.log("El tamaño de caracteres de la primera palabra es : "+tPalA);
console.log("El tamaño de caracteres de la segunda palabra es : "+((tPalB-tPalA)-1));
console.log("El tamaño de caracteres de la segunda palabra es : "+((tPalC-tPalB)-1));

//Segunda Solución
const tPal1 = text.indexOf(" ");
const tPal2 = (text.lastIndexOf(" "))-(tPal1+1);
const tPal3 = (text.length)-((text.lastIndexOf(" "))+1);


console.log("Segunda Solucción \n");
console.log("El texto a contar el tamaño por palabra es : \n"+text);
console.log("El tamaño de caracteres de la primera palabra es : "+tPal1);
console.log("El tamaño de caracteres de la segunda palabra es : "+tPal2);
console.log("El tamaño de caracteres de la segunda palabra es : "+tPal3+"\n\n");

//Tercera Solucción
/*Hacer uso del metodo split para string indicando que el divisor de elementos es un espacio en blanco
y hacer un array con los elementos resultantes de la cadena string
y luego con un ciclo for logró determinar el tamaño de cada elemento*/

console.log("Tercera Solucción\n");
console.log("El texto a contar el tamaño por palabra es : \n"+text);
const textArray = text.split(" ");
console.log("El texto ingresado tiene : "+textArray.length+" palabras y cada palabra tiene el siguiente tamaño :");
for (let index = 0; index < textArray.length; index++) {
    
    console.log("La palabra No. "+(index+1)+" tiene como tamaño "+textArray[index].length+ " caracteres");
    
}

//

