//CONDICIONAL 'if':

//EJEMPLO 1:
function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');
  viajar('Otro destino');

  //EJEMPLO 2:
  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } else {
    console.log( false );
    }
  }
  
  puedeManejar(17);
  puedeManejar(18);
  puedeManejar(21);