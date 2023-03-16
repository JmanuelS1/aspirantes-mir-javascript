//1 crear un objeto llamado persona

let Persona = {
    Nombre : "Manuel", 
    Edad : 32,
    Ciudad : "Bogotá",
    Profesion : "Desarrollador"
}

//2 imprimimos el objeto llamado persona
console.log(Persona)

//3 creamos una funcion llamada presentacion que devuelve una cadena de texto con los datos de la persona
function presentacion(Persona) {
    return `Hola, mi nombre es ${Persona.Nombre}, tengo ${Persona.Edad} años, Resido en ${Persona.Ciudad}, y mi profesion es ${Persona.Profesion}.`
}

//4 Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = presentacion(Persona);

//5  imprimimos en la consola la variable mensaje
console.log(mensaje);

//6 Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
// los arreglos van entre []
Persona.Hobbies = ["Jugar LoL","Programar","Viajar"]

//7 Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log(Persona.Hobbies);

//8 Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
for(let i = 0; i < Persona.Hobbies.length; i++) {
    console.log(Persona.Hobbies[i]);
  }