// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  const gato = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return 'Meow!'
    }
  }
  return gato;
}


function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  const nuevoObjeto = {
    nombre: nombre,
    email: email,
    password: password
  }
  return nuevoObjeto;
}

function tieneEmail(usuario) {
  for(let clave in usuario){
    if(usuario.email === null || !usuario.hasOwnProperty('email') ){
      return false;
    }
  }
  return true;
}


function tienePropiedad(objeto, propiedad) {
  for(let clave in objeto){
    if(objeto.hasOwnProperty(propiedad)){
      return true;
    }
  }
  return false;
}

function verificarPassword(usuario, password) {
    return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  for(let i=0; i< usuarios.length; i++){
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  let sum = 0;
  for(let i=0; i < usuario.posts.length; i++){
    sum = sum + usuario.posts[i].likes;
  }
  return sum;
}

function agregarMetodoCalculoDescuento(producto) {
  producto['calcularPrecioDescuento']= function(){
      return this.precio - this.precio*this.porcentajeDeDescuento;
    }
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
