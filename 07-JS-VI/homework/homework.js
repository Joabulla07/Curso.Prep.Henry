// Do not change any of the function names

function mayuscula(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  cb(numeros.reduce(function(acc,elemento){ return acc + elemento;
  }));
}

function forEach(array, cb) {
  array.forEach(function (elemento){
    cb(elemento)})
}

function map(array, cb) {
  let nuevoArray = [array.length];
  array.forEach(function (elemento, indice){
    nuevoArray[indice] = cb(elemento)})
  return nuevoArray;
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
}

function filter(array) {
  return array.filter(function (elemento) {
    return elemento.charAt(0) === 'a'
  });
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
