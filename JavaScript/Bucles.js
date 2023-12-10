var suma = 0;

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);

while (suma < 13) {
    suma = suma + 1;
    console.log(suma);
};

//BREAK
/*
switch (expresión) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [break;]
    case valor2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [break;]
    ...
    case valorN:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      [break;]
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      [break;]
  }
  */

//EJEMPLO 1
expr = 'Naranjas';
switch (expr) {
    case "Naranjas":
        console.log("El kilogramo de naranjas cuesta $0.59.");
        break;
    case "Manzanas":
        console.log("El kilogramo de manzanas cuesta $0.32.");
        break;
    case "Platanos":
        console.log("El kilogramo de platanos cuesta $0.48.");
        break;
    case "Cerezas":
        console.log("El kilogramo de cerezas cuesta $3.00.");
        break;
    case "Mangos":
    case "Papayas":
        console.log("El kilogramo de mangos y papayas cuesta $2.79.");
        break;
    default:
        console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

//EJEMPLO 2
var Animal = 'Jirafa';
switch (Animal) {
    case "Vaca":
    case "Jirafa":
    case "Perro":
    case "Cerdo":
        console.log("Este animal subirá al Arca de Noé.");
        break;
    case "Dinosaurio":
    default:
        console.log("Este animal no lo hará.");
}
// DO WHILE 
/*
do
    sentencia
while (condición);
*/
//EJEMPLO
let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);