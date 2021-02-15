// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}


function devolverUltimoElemento(array) {
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  for(let i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  for(let i=0; i< array.length; i++){
    if(elemento === array[i]){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  let suma = 0;
  for(let i=0; i< numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  let suma = 0;
  for(let i=0; i< resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  let grande = 0;
  for(let i=0; i < numeros.length; i++){
    if(grande < numeros[i]){
      grande = numeros[i];
    }
  }
  return grande;
}


function multiplicarArgumentos() {
  let mult = 1;
  if(arguments.length === 0){
    return 0;
  }
  else{
    for(let i = 0; i < arguments.length; i++){
      mult = mult * arguments[i];
    }
  }
  return mult;
}


function cuentoElementos(arreglo){
  let cont = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 19){
      cont++;
    }
  }
 return cont;
}


function diaDeLaSemana(numeroDeDia) {
  switch(numeroDeDia){
    case 1: return 'Es fin de semana';break;
    case 2: return 'Es dia Laboral';break;
    case 3: return 'Es dia Laboral';break;
    case 4: return 'Es dia Laboral';break;
    case 5: return 'Es dia Laboral';break;
    case 6: return 'Es dia Laboral';break;
    case 7: return 'Es fin de semana';break;
    default: return 'Dia inexistente';break;
  }
} 


function empiezaConNueve(n) {
  for(let i=0; i< n.toString().length; i++){
    if(n > 10) {
      n = Math.floor(n / 10);
      if (n < 10) {
        if (n === 9) {
          return true;
        }
      }
    }
    else{
      if (n === 9) {
        return true;
      }
    }
  }
  return false;
}


function todosIguales(arreglo) {
  let elemento = arreglo[0];
  for(let i=1; i < arreglo.length; i++){
    if(elemento !== arreglo[i]){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  let nuevoArray = [];
  let j = 0;
  for(let i=0; i < array.length; i++){
    if((array[i] === 'Enero') || (array[i] === 'Marzo') || (array[i] === 'Noviembre')){
      nuevoArray[j] = array[i];
      j++;
    }
  }
  if(nuevoArray.length < 3){
    return 'No se encontraron los meses pedidos';
  }
  return nuevoArray;
}


function mayorACien(array) {
  let nuevoArray = [];
  let j = 0;
  for(let i=0; i < array.length; i++){
    if(array[i] > 100){
      nuevoArray[j] = array[i];
      j++;
    }
  }
 return nuevoArray;
}


function breakStatement(numero) {
  let nuevoArray = [];
  for(let i=0; i < 10; i++){
    numero = numero + 2;
    if(numero === i){
      break;
    }
    else{
      nuevoArray[i] = numero;
    }
  }
  if(nuevoArray.length < 10){
    return 'Se interrumpió la ejecución';
  }
    return nuevoArray;
}


function continueStatement(numero) {
  let nuevoArray = [];
  let j=0;
  for(let i=0; i < 10; i++){
    if(i === 4){
      continue;
    }
      numero = numero + 2;
      nuevoArray[j] = numero;
      j++;
  }
  return nuevoArray;
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
