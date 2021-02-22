// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
   return Object.entries(objeto);
}


function numberOfCharacters(string) {
   final = {};
   for(let char in string ){ //Cogemos el indice de cada caracter
      if(string[char] in final) { //Si ya existe, simplemente aumentamos el contador
         final[string[char]] = final[string[char]] + 1
      } else { // Si no existe, lo inicializamos a 1
         final[string[char]] = 1
      }
   }

   return final;
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
}


function capToFront(s) {
   let palabra = '';
   for(let i=0; i < s.length; i++){
      if(s[i] === s[i].toUpperCase()){
         palabra = palabra+s[i];
      }
   }
   for(let i=0; i < s.length; i++){
      if(s[i] === s[i].toLowerCase()){
         palabra = palabra+s[i];
      }
   }
   return palabra;
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
   let array = [];
   let j=0;
   let nuevo = str.split(' ');

   function reverse(palabra){
      let nuev = '';
      for(let i=palabra.length-1; i>=0; i--){
         nuev +=palabra[i];
      }
      array[j] = nuev;
      j++;
   }

   for(let i=0; i<nuevo.length; i++){
      reverse(nuevo[i]);
   }
   return array.join(' ');
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
   let num = numero.toString();
   let reves = '';

   for(let i=num.length-1; i>=0; i--){
      reves +=num[i];
   }

   for(i=0; i<num.length;i++){
      if(num[i] !== reves[i]){
         return 'No es capicua';
      }
   }
   return 'Es capicua';
}


function deleteAbc(cadena){ //borrar las letras a b o c y devolver la cadena
   let nueva = '';
   for(let i=0; i < cadena.length; i++){
      if((cadena[i] !== 'a') && (cadena[i] !== 'b') && (cadena[i] !== 'c')){
         nueva+=cadena[i];
      }
   }
   return nueva;
}


function sortArray(arr) {
   return arr.sort(function(a, b){
      return a.length - b.length;
   });
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
   let nuevo = [];
   let k = 0;

   if(arreglo1.length > arreglo2.length){
      for(let i=0; i < arreglo2.length; i++){
         for(let j=0; j< arreglo1.length; j++){
            if(arreglo1[i] === arreglo2[j]){
               nuevo[k] = arreglo1[i];
               k++
            }
         }
      }
   }
   else{
      for(let i=0; i < arreglo1.length; i++){
         for(let j=0; j< arreglo2.length; j++){
            if(arreglo1[i] === arreglo2[j]){
               nuevo[k] = arreglo1[i];
               k++
            }
         }
      }
   }
   return nuevo;
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

