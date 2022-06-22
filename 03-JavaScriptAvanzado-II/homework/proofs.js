function saludar(saludo) {
    return function(nombre) {
        console.log(saludo + ' ' + nombre);
    }
}
var saludo1 = saludar('Hola, buenos días');
console.log(saludo1('Jairo'));