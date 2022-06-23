/* var persona = {
    nombre: 'Guille',
    apellido: 'Aszyn',
}

var perro = {
    nombre: 'perrito',
    description: 'El mas bonito',
}

var logNombre = function() {
    console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);
//el primer parámetro de bind es el this!
var logNombrePerro = logNombre.bind(perro);

logNombrePersona();
logNombrePerro();

//BIND DEVUELVE UNA FUNCIÓN */



/* Bind acepta más parámetros, el primero siempre es el `this`, los siguentes
sirven para bindear parámetros de una función.
Esto se conoce como function currying. */
function multiplica(a, b) {
    return a * b;
}
//EL PRIMER PARÁMETRO DE BIND ES A LO QUE HA REFERENCIA EL THIS
var multiplicaPorDos = multiplica.bind(this, 2);
//el Bind le 'bindeó' el 2 al argumento a.
//y devolvió una función nueva con ese parámetro bindeado.
console.log(multiplicaPorDos(3));
console.log(multiplicaPorDos(4));
