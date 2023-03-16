//1 crear la variable receta
let Receta = {};

//2 agregar propiedad nombre
Receta.Nombre = "Sandwich";

//3 Agrégale una propiedad ingredientes con un arreglo vacío
Receta.Ingredientes = [];

//4 Agrega un objeto al arreglo ingredientes con las siguientes propiedades:
Receta.Ingredientes.push({Nombre:"Pan", Cantidad: 2});

//5 Agrega otro ingrediente al arreglo con las siguientes propiedades:
Receta.Ingredientes.push({Nombre:"Queso", Cantidad: 1});

//6 Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
console.log(Receta.Ingredientes[0].Nombre)

//7 Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let TotalIngredientes = 0;
for (let i = 0; i <Receta.Ingredientes.length; i++) {
    TotalIngredientes += Receta.Ingredientes[i].Cantidad;
}
console.log("El total de la cantidad de ingredientes es: " + TotalIngredientes);