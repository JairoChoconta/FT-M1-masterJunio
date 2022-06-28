function Node(data) {
    this.data = data;
    this.next = null; 
}

function LinkedList() {
    this.head = null;
}

let list = new LinkedList(); // list.head = null

LinkedList.prototype.add = function(data) {
    let node = new Node(data);

    // el this va a ser la instancia de la LinkedList( lista )
         // a la cual le aplico el método. En este caso el this es
         // mi lista (mi instancia de lista)
    let current = this.head;
    if ( !current ) { // if ( current === null )
        // puedo o no tener información en el hear
        // acá estoy en el caso donde no tengo NADA, no tengo head
        // no tengo un NODO asociado al head.
        this.head = node; 
    }

    while ( current.next ) { // while (current.nex t !== null)
        current = current.next; 
    }
    current.next = node; 

}