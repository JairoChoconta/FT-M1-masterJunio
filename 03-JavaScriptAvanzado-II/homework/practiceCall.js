var persona = {
    nombre: 'Guille',
    apellido: 'Aszyn',
}
var logNombre = function(){
    console.log(this.nombre);
}
 // el primer parametro de call es el this!
logNombre.call(persona);
// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!
//
var logNombre = function(arg1, arg2){
    
    console.log(arg1 +' '+ this.nombre +' '+ arg2);
}
logNombre.call(persona, 'Hola', ', Cómo estas?');
////Hola Guille, Cómo estas? 