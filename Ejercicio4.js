/*Lectura recomendada
Ejercicio 4: obteniendo correos de usuarios

1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre,
 email y edad, con valores asignados por ti.

 2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el arreglo del primer paso
 (debes de acceder a los correos apoyandote en lo aprendido anteriormente).

3. Enviar tu ejercicio al correo tony.ospino@academlo.com */

const personas = [
    {
        name: 'Persona1',
        email: 'Persona1@Persona1.com',
        edad: 15
    },
    {
        name: 'Persona2',
        email: 'Persona2@Persona2.com',
        edad: 20
    },{
        name: 'Persona3',
        email: 'Persona3@Persona3.com',
        edad: 25
    },{
        name: 'Persona4',
        email: 'Persona4@Persona4.com',
        edad: 30
    },{
        name: 'Persona5',
        email: 'Persona5@Persona5.com',
        edad: 35
    },
];


var emails=[];

for (let index = 0; index < personas.length; index++) {
    emails.push(personas[index].email);
    console.log("El correo del usuario No. "+(index+1)+" es " + emails[index]);
};
console.log("\nLos elementos del arreglo con los correos es \n[");
for (let index = 0; index < emails.length; index++) {
    console.log(emails[index]);
    
};
console.log("] \n ");