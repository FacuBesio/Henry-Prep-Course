/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arrayPadre = [];

   for (let elem in objeto) {
      var array = [];
      array.push(elem);
      array.push(objeto[elem]);
      arrayPadre.push(array);
   }
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var palabraSeparada = string.split('');
   var objeto = {};
   palabraSeparada.forEach((elem) => {
      objeto[elem] = 0;
      for (let i = 0; i < palabraSeparada.length; i++) {
         if (palabraSeparada[i] === elem) {
            objeto[elem] = objeto[elem] + 1;
         };
      };
   });

   var propiedadesOrdenadas = Object.keys(objeto).sort();

   const objetoOrdenado = {};
   propiedadesOrdenadas.forEach((clave) => {
      objetoOrdenado[clave] = objeto[clave];
   });

   return objetoOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var testMayus = '';
   var testMinus = '';

   for (let i = 0; i < string.length; i++) {

      if (string[i] === string[i].toUpperCase()) {
         testMayus = testMayus + string[i];
      } else if (string[i] === string[i].toLowerCase()) {
         var testMinus = testMinus + string[i];
      }
   }
   return testMayus + testMinus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var letrasSeparadas = frase.split('');
   var arrayPadre = [];
   var palabra = [];
   var fraseEspejo = '';

   for (let i = 0; i < letrasSeparadas.length; i++) {
      if (letrasSeparadas[i] !== ' ') {
         palabra.push(letrasSeparadas[i]);
      }
      if (letrasSeparadas[i] === ' ' || i === letrasSeparadas.length - 1) {
         arrayPadre.push(palabra);
         var palabra = [];
      };

   }

   for (let i = 0; i < arrayPadre.length; i++) {
      arrayPadre[i].reverse()

      if (i !== arrayPadre.length - 1) {
         arrayPadre[i].push(' ')
      }

      var palabraUnida = arrayPadre[i].join('');
      fraseEspejo = fraseEspejo + palabraUnida;
   }

   return fraseEspejo;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var string1 = numero + '';
   var string2 = numero + '';
   var letrasSeparadas = string1.split('');
   var letrasSeparadasReverse = string2.split('').reverse();
   var palabraUnida = letrasSeparadas.join('');
   var palabraUnidaReverse = letrasSeparadasReverse.join('');
   if (palabraUnida === palabraUnidaReverse) {
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var letrasSeparadas = string.split('');
   var nuevoArray = [];
   letrasSeparadas.forEach((element) => {
      if (element !== 'a' && element !== 'b' && element !== 'c') {
         nuevoArray.push(element);
      }
   });

   var palabraUnida = nuevoArray.join('');

   return palabraUnida;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var nuevoArrayOrdenado = [];
   var arrayFinal = [];

   arrayOfStrings.forEach((elem) => {
      nuevoArrayOrdenado.push(elem.length)
   });
   nuevoArrayOrdenado.sort();

   nuevoArrayOrdenado.forEach((elem) => {
      for (let i = 0; i < arrayOfStrings.length; i++) {

         if (elem === arrayOfStrings[i].length) {
            arrayFinal.push(arrayOfStrings[i]);
            arrayOfStrings.splice(i, 1)
         }
      }
   });

   return arrayFinal;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var nuevoArray = [];

   array1.forEach((elem1) => {

      array2.forEach((elem2) => {
         if (elem1 === elem2 && !(nuevoArray.includes(elem2))) {
            nuevoArray.push(elem1);
         }
      });

   });

   nuevoArray.sort();

   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
