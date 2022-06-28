"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  //this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
// Agregar al principio
// Agregar al final
// Agregar en el medio segun alguna condición
// Agregar un elemento en la posición x

LinkedList.prototype.add = function() {
  let node = new Node(data);
  // node = {value: data, next: null}
  let current = this.head;
  if( !current ) {
    // Acá puedo hacer cualquiera de estas 4 opciones:
    // if( !this.head )
    // if( this.head === null )
    // if( current === null )
     this.head = node;
     // this._length++;
     return node;
  }
  // Ahora:
  // Debo ir avanzando a lo largo de la lista hasta llegar al 
  // último nodo antes de llegar al null
  // head -> 1 -> 2 -> 3 -> null
  while( current.next ) { // while (current.next !== null)
    current = current.next;
  }
  current.next = node;
  // this._length++;
  return node;
};

// Eliminar al principio
// Eliminar al final
// Eliminar en el medio segun alguna condición
// Eliminar un elemento en la posición x
LinkedList.prototype.remove = function() {
  // Eliminar el último nodo de la lista, por lo tanto NO recibe 
  // parámetros.
  // Sí -> head -> null
  if ( this.head === null ) return null;
  // if ( this._length === 0 ) return null;

  // -> head -> 1 -> null
  else if ( current && !current.next ) { //if (current !== null && current.net === null)
                 // this.head && !this.head.next
    // Antes de eliminar hay que guardar head en un aux para 
    // poderlo devolver 
    let aux = current.value; // let aux = this.head.value; aux = 1;
    this.head = null;
    //this._length--;
    return aux; // 1
  }
  // Si tengo n cantidad de elementos
  // obj: -> head -> 1 -> 4 -> 2 -> null
  // tengo: -> head -> 1 -> 4 -> 2 -> 6 -> null
  //                             ^
  while ( current.next.next ) {
    current = current.next;
  }
  let aux = current.next.value; // 6
  current.next = null;
  // this._length--;
  return aux;
};

// search(2)
// -> head -> 1 -> 4 -> 2 -> 6 -> null
//          ^
// search(function(value) value*2  === 4 ? true: false)

LinkedList.prototype.search = function(value) {
  if ( this.head === null ) return null
  let current = this.head;
  while ( current ) {
    // current ? Nodo = {value,next}
    if ( current.value === value ) return current.value;
    else if ( typeof value == 'function' ) { // Ej: if value*2 true
      if ( value(current.value) ) {
        return current.value;
      }
    }
    current = current.next;
  }
  return null;

};
// ------------------------------------------------------
// TENER CUIDADO: cuando el enunciado les dice:
// DEVUELVO UNA NUEVA LISTA -> new LinkedList
// MODIFICO LA LISTA -> current / aux (no devuelvo nada)
// NO DEVUELVO NADA
// ------------------------------------------------------

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket 
  se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

/*  RECORDAR LÓGICA DEL HASHTABLE - EJEMPLO 1
  juan pirulo 
  J -> van a ir a parar al mismo cajón
  // CAJONES: A, B, C, D

  juana pirula
  Mi table son mis cajones: j -> son mis cajones
  Mi hash function: es evaluar con qué letra empieza. 
  key -> juana pirula
  value -> expediente de juana pirula

  // Al hacer el get (obtener para sacar), Obtengo:
  get (key) -> get(juana pirula) -> hash(juana pirula) -> J
  // Busco en el cajón J -> juana pirula -> value: exp. de juana pirula
*/

/* EJEMPLO 2 - BIBLIOTECA
  // Libro: El origen
  // genero: ciencia ficción

  // ciencia ficción
  // key -> NOS DICE DÓNDE GUARDARLO Y DÓNDE IR A BUSCARLO
  // value -> ES EL VALOR ASOCIADO A ESE KEY
*/

/* EJEMPLO 3 - Contactos de teléfono
    key: nombre
    value: nro. de telefono

    Ej: jairo choconta -> 3124577909
    // mi función hash sería: 7 consonantes -> va a ir a parar a la
    página 7.
    // pagina 7 -> jairo choconta: 3124577909.

    // get -> cuando quiera buscarlo
    // sé cómo se llamaba: jairo choconta
    // aplico el hash: 7 consonantes -> va a ir a parar a la pág 7

  // key -> NOS DICE DÓNDE GUARDARLO Y DÓNDE IR A BUSCARLO
  // value -> ES EL VALOR ASOCIADO A ESE KEY
*/

function HashTable() {
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(Key) {
  let sum = 0;
  for ( let i = 0; i < Key.length; i++ ) {
    sum += Key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}
HashTable.prototype.set = function(key, value) {
  if ( typeof key !== 'string' ) throw TypeError('Keys must be strings');
  let i = this.hash(key); 
  
  if( this.buckets[i] === undefined ) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
  //this.buckets = []
  // i = 3
  // this.buckets[3] = [,,,{}]
  // this.buckets[3][hola] = [,,,{hola: value}]
  // this.buckets[3].key = NO (literal)
};

HashTable.prototype.get = function(key) {
  let i = this.hash(key);
  // this.buckets[3][hola] = [,,,{hola: value}]
  return this.buckets[i][key];
};

HashTable.prototype.hasKey = function(key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
}; 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
