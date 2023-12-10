//Ejemplo1: 
function devuelvoUsuario() {
    return 'CAMILO';
}
function devuelvoSaludo() {
    return 'Hola';
}
function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

//Ejemplo2: 
function devolverComida(comida) {
    return 'Hoy quiero comer: ' + comida;
}

function callBack(comida, cb) {
    return cb(comida);
}

var fraseFinal = callBack('Pastas',devolverComida);

console.log(fraseFinal);
