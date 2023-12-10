// ARRAYS
console.log('• ARRAYS:')
var listaDeCompras = [];

listaDeCompras[0] = 'Tomates';
listaDeCompras[2] = 'Lechgas';
listaDeCompras[4] = 'Zanahorias';

console.log(listaDeCompras);

console.log(listaDeCompras[2]);

var elementoArray = listaDeCompras[4];

console.log(elementoArray);

console.log(listaDeCompras.length);

// METODOS ARRAYS: PUSH - POP - UNSHIFT - SHIFT
console.log('• METODOS ARRAYS: PUSH - POP - UNSHIFT - SHIFT')
var colores = ['amarillo', 'azul'];
colores.push('rojo'); // Agrega al final del Array.
colores.unshift('verde'); // Agrega al principio del Array.
colores.pop(); // Elimina el ultimo del elemento.
colores.shift(); // Elimina el primer del elemento.
//colores.push(8);
console.log(colores);



// METODOS ARRAYS: INCLUDES - EVERY
console.log('• METODOS ARRAYS: INCLUDES - EVERY')
var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"]
var incluyecDali = pintores.includes("Dali"); // Verifica si existe el Elemento dentro del Array.
var incluyecMonet = pintores.includes("Monet");
console.log(incluyecDali);
console.log(incluyecMonet);

var arrayNumeros1 = [1, 6, 7, 8]
var numerosMayorCinco = arrayNumeros1.every((num) => {
    return num > 5;
})
console.log(numerosMayorCinco);

var arrayNumeros2 = [10, 6, 7, 8]
numerosMayorCinco = arrayNumeros2.every((num) => {
    return num > 5;
})
console.log(numerosMayorCinco);

// METODOS ARRAYS: SPLIT - JOIN
console.log('• METODOS ARRAYS: SPLIT - JOIN')
var palabra = 'Henri';
var palabraSeparada = palabra.split('');// Separa el String caracter por caracter y lo convierte en un Array.
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);
var palabraUnida = palabraSeparada.join(''); // Convierte un Array en un String.
console.log(palabraUnida);

// METODOS ARRAYS: FOREACH - MAP
console.log('• METODOS ARRAYS: FOREACH')
var numeros = [1, 2, 3, 3, 4];
numeros.forEach((num) => console.log(num)); // Foreach sirve para recorrer el Array.
numeros.forEach((num) => {
    if (num === 3) {
        console.log(num)
    }
});

var masUno = numeros.map((num) => { return num + 1 }); // Map se puede utilizar para modificar el Array.
console.log(masUno);

// BUCLES EN ARRAYS:
console.log('• FOR:')
// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

function encontrarLetraP(string) {
    var letra = string.split('');
    
    for (let i = 0; i < letra.length; i++) {
        if (letra[i] === 'p' || letra[i] === 'P') {
            console.log('El String contiene la letra P');
        };
    }
}

encontrarLetraP('Pincel');
encontrarLetraP('JavaScript');
encontrarLetraP('Henry');

// WHILE

var arr = [];

while (arr.length < 5) {
    arr.push('BOOM');
}

console.log(arr);



