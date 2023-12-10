function cacheFunction(cb) {
    // Objeto para almacenar los resultados en caché
    const cache = {};
  
    // La función interna que actuará como caché
    return function(arg) {
        const result = cb(arg);
        // console.log("Calculando y almacenando resultado en caché para", arg);
        cache[arg] = result;
        console.log(cache);
        return result;
      }
    };
  
 
  // Ejemplo con la función square CALLBACK
 function square(n) {
    return n * n;
  }
  
  const squareCache = cacheFunction(square);
  
  // Primera llamada a squareCache(5)
  console.log(squareCache(5)); // Salida: Calculando y almacenando resultado en caché para 5, 25
  
  // Segunda llamada a squareCache(5)
  console.log(squareCache(5)); // Salida: Recuperando resultado de la caché para 5, 25