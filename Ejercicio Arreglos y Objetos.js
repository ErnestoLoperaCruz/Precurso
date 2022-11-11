const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'daniela@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

// Almacenar todas las url´s de facebook en un nuevo arreglo:
const emails=[];
const facebooks=[];
for (let index = 0; index < users.length; index++) {
    emails.push(users[index].email);
    facebooks.push(users[index].social[0].url);
    console.log("El correo del usuario No. "+(index+1)+" es " + emails[index] + "\n y su url de facebook es "+facebooks[index]+"\n");
};
console.log("los elementos del arreglo con los correos es \n[");
for (let index = 0; index < emails.length; index++) {
    console.log(emails[index]);
    
};
console.log("] \n ");
console.log("los elementos del arreglo con las url de facebook es \n[");
for (let index = 0; index < facebooks.length; index++) {
    console.log(facebooks[index])
    
}
console.log("] \n ");