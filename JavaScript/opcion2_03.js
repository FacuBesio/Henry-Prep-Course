function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

    // Tu código aca:

    objetoRetorno = {};
    amigos.forEach((obj) => {
        
        if (obj.nombre === nombre) {
            objetoRetorno = obj;
        }
    });

    return objetoRetorno;

}

var amigos = [{ nombre: 'toni', edad: 33 }, { nombre: 'Emi', edad: 25 }];
var amigos2 = [{ nombre: 'toni', edad: 33 }, { nombre: 'Juan', edad: 'Emi' }];

console.log(buscarAmigo(amigos, 'toni'));
console.log(buscarAmigo(amigos2, 'Emi'));  