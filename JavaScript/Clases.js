// Las Clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
   // Propiedades
   this.puertas = puertas;
   this.color = color;
   this.marca = marca;
   this.año = año;
   this.ruedas = ruedas;
   
   // Metodos
   this.informacion = function () {
      console.log('Es es un auto ' + marca + ' de color ' + color);
   }
}
let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);
miPrimerAuto.informacion();


// EXPRESIÓN DE CLASE
class AutoB {
   // Propiedades
   constructor(puertas, color, marca, año, ruedas) {
      this.puertas = puertas;
      this.color = color;
      this.marca = marca;
      this.año = año;
      this.ruedas = ruedas;
   }

   // Metodos
   informacion() {
      console.log('Es es un auto ' + this.marca + ' de color ' + this.color);
   }
}
let miSegundoAuto = new AutoB(4, 'Blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
miSegundoAuto.informacion();

// HERENCIA DE CLASES 
class Persona {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }
   saludar() {
      console.log(
         'Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad
      );
   }
}
let martin = new Persona('Martin', 26);
martin.saludar();

class Programador extends Persona {
   constructor(nombre, edad, añosDeExperiencia) {
      super(nombre, edad);
      this.añosDeExperiencia = añosDeExperiencia;
   }
   codear() {
      console.log(
         'Soy ' + this.nombre + '. Codeo desde hace ' + this.añosDeExperiencia + ' años'
      );
   }
}

let programador = new Programador('María', 37, 4);
programador.saludar();
programador.codear();