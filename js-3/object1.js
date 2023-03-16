let pedro = {
    Nombre : "Pedro Perez" , 
    Edad : 30,
    Activo : true,
    Hobbies : ["Programar", "Squash", "Piano"]
};

//imprime en la consola el valor de la llave edad
console.log(pedro.Edad)

//Agrega una propiedad con llave estatura y valor 1.8
pedro.Estatura = 1.8;

//elimina la propiedad de activo
delete pedro.Activo

//Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).

for (let key in pedro) {
    console.log(key + ":" + pedro[key]);
}

//Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
pedro.saluda = function(){
    return "Hola, me llamo " + this.Nombre
};

//Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.

console.log(pedro.saluda());