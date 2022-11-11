//1. Averiguar si el correo de usuario pertenece a Academlo
// Ejemplo de la clase
const user={
    name:"Erik",
    age:25,
    email:"erik@academlo.com",
    description:"Me gusta la programación"
};
const user1={
    name:"Daniel",
    age:15,
    email:"daniel@gmail.com",
    description:"Estoy aprendiendo a programar"
};
console.log("¿El correo del usuario "+user.name+" pertenece a Academlo? \n La respuesta es : "+(user.email.endsWith("academlo.com"))+"\n");
console.log("¿El correo del usuario "+user1.name+" pertenece a Academlo? \n La respuesta es : "+(user1.email.endsWith("academlo.com"))+"\n");

// Sumar las dos edades 
//Ejemplo de la clase

const suma= user.age+user1.age
console.log("La suma de las edades de los dos usuarios es :"+suma+"\n")

// Encuentra el tamaño de la primer palabra de la descripción de cada usuarios
// Ejercicio de la clase

const dUser1=user.description.split();
const dUser2=user1.description.split();

console.log("El tamaño de la primer palara de la descripción del usuario 1 es :"+dUser1[0].length);
console.log("El tamaño de la primer palara de la descripción del usuario 2 es :"+dUser2[0].length);