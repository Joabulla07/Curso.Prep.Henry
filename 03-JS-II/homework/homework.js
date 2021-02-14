// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if(x > y){
    return x;
  }
  else if(y > x){
    return y;
  }
  return x;
}

function mayoriaDeEdad(edad) {
  if(edad >= 18){
    return 'Allowed';
  }
  else{
      return 'Not allowed';
  }
}

function conection(status) {
  switch(status){
    case 1: return 'Online';break;
    case 2: return 'Away';break;
    default: return 'Offline';break;
  }
}

function saludo(idioma) {
    switch (idioma) {
        case 'aleman':
            return 'Guten Tag!';
            break;
        case 'mandarin':
            return 'Ni Hao!';
            break;
        case 'ingles':
            return 'Hello!';
            break;
        default:
            return 'Hola!';
            break;
    }
}

function colors(color) {
    switch(color){
      case 'blue': return 'This is blue';break;
      case 'red': return 'This is red';break;
      case 'green': return 'This is green';break;
      case 'orange': return 'This is orange';break;
      default: return 'Color not found';break;
    }
}

function esDiezOCinco(numero) {
    if((numero === 10)||(numero === 5)){
      return true;
    }
     return false;
}


function estaEnRango(numero) {
  if(numero < 50 && numero > 20){
    return true;
  }
  return false;
}

function esEntero(numero) {
  if(numero === Math.floor(numero)){
    return true;
  }
  return false;
}

function fizzBuzz(numero) {
    if(numero % 3 === 0){
      if(numero % 5 === 0){
        return 'fizzbuzz';
      }
      return 'fizz';
    }
    else if(numero % 5 === 0){
      return 'buzz';
    }
    return numero;
}


function operadoresLogicos(num1, num2, num3) {
      if(num1 !==0 && num2 !==0 && num3 !==0) {
          if((num1 < 0) || (num2 < 0) || (num3 < 0)){
              return 'Hay negativos';
          }
          if (num1 > num2 && num1 > num3 && num1 > 0) {
              return 'Número 1 es mayor y positivo';
          }
          if(num3 > num1 && num3 > num2){
              return num3 + 1;
          }
      }
      else{
        return 'Error';
      }

    return false;
}

function esPrimo(numero) {
    if(numero === 0 || numero ===1){
      return false;
    }
    for(let i= 2;i<=10;i++){
      if((numero % i === 0) && (i!==numero)){
        return false;
      }
    }
    return true;
}

function esVerdadero(valor){
    if(valor === true){
      return 'Soy verdadero';
    }
    return 'Soy falso';
}

function tablaDelSeis(){
    let tabla = [];
    for(let i=0;i<=10;i++){
        tabla[i] = 6*i;
    }
    return tabla;
}

function tieneTresDigitos(numero){
    var cont=0;
      do{
          numero = Math.floor((numero/10));
          cont++;
      }while(numero > 0);
    if(cont === 3){
        return true;
    }
    return false;
}

function doWhile(numero) {
    var i=0;
    do{
      numero = numero + 5;
      i++;
    }while(i<8)
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

    module.exports = {
        obtenerMayor,
        mayoriaDeEdad,
        conection,
        saludo,
        colors,
        esDiezOCinco,
        estaEnRango,
        esEntero,
        fizzBuzz,
        operadoresLogicos,
        esPrimo,
        esVerdadero,
        tablaDelSeis,
        tieneTresDigitos,
        doWhile
    };
