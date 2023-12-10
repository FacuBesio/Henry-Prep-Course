var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estudios.esProgramador);

// ASIGNAR
persona.nombre = 'Martín';
persona.edad = 28;
persona.estudios.esProgramador = false;
console.log(persona);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// CREAR FUNCIONES EN UN OBJETO
var objConFun = {
    saludar: function () {
        console.log('Hola Mundo desde Objeto JS')
    }
};
objConFun.saludar();

// DOT NOTATION
var atuendos = {pies: ['Zapatos', 'Soquetes']};
atuendos.manos = ['Guantes', 'Anillos'] 
console.log(atuendos.manos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// DIFERENCIA 

var comidas1 = {};

var diferenciaDeNotaciones = function (prop1, prop2){
    comidas1.prop1 = ["Frutas", "Vegetales"];
    comidas1["prop2"] = ["Hamburguesas", "Papas Fritas"];
    // En este caso no se esta igualando las propiedades con los Parametros. Se crearan directamente nuevas
    // propiedades dentro del Objeto, pero que no tendran relacion con los Paramentros. Para modificar
    // este compotamiento se debe utlizar BRACKET NOTATION sin comillas como en el ejemplo siguiente.
}
diferenciaDeNotaciones ("Saludable", "NoSaludable")
console.log(comidas1);

var comidas2 = {};
var diferenciaDeNotacionesOK = function (prop1, prop2){
    comidas2.prop1 = ["Frutas", "Vegetales"];
    comidas2[prop2] = ["Hamburguesas", "Papas Fritas"];
    // La unica forma de igualr las Propiedades y los Parametros es utlizando BRACKET NOTATION sin las comillas.
    // No se podra realizar dicho objetivo con DOT NOTATION.
}
diferenciaDeNotacionesOK ("Saludable", "NoSaludable")
console.log(comidas2);


// OBJECT => Objeto Global que extiende diferentes métodos común a todos los Objetos.

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedadNombre = libro.hasOwnProperty('nombre');
var tienePropiedadAutor = libro.hasOwnProperty('autor');

console.log(tienePropiedadNombre);
console.log(tienePropiedadAutor);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// FOR IN 
var mundo = {continetes: 7, paises: 195, oceanos: 5}
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Mestizo',
    amistoso: true,
    dueño: 'María López',
    info: function(){
       console.log('Mi perro es un ' + this.raza);
    },
 };

 mascota.info();


