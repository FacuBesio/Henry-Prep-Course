function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

    // Tu código aca

    var stringMasLargo = strings[0];


    strings.forEach((elem) => {
        if (elem.length >= stringMasLargo.length) {
            stringMasLargo = elem;
        }
    });

    return stringMasLargo;

}

var strings1 = ['hi', 'hello', 'ni hao', 'guten tag'];
var strings2 = ['JavaScript', 'HTML', 'CSS'];

console.log(stringMasLarga(strings1));
console.log(stringMasLarga(strings2));  