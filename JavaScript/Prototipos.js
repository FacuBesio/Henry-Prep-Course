// Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus 
// propiedades y métodos.
// El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de
// dato se denomina herencia.

Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i] > 3) {
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);


class LatinoAmerica {
    constructor() {
        this.paises = [];
    };
};

LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};
let continenteAmerica = new LatinoAmerica();
continenteAmerica.agregarPais('México');
console.log(continenteAmerica.paises);