import { Node } from "./Node.js";
import { RemoveDups } from "./RemoveDups.js";


class SingleLinkedList {

  constructor(){
    this.head = null;
  }


  appendToTail( value ){
    if( this.head === null ){
      this.head = new Node( value )
      return
    }

    let current = this.head // node auxiliar - itera sin modificar la lista
    while( current.next !== null ){
      current = current.next;
    }

    current.next = new Node(value);
  }


  deleteNode( value ){
    if( this.head === null ) return;

    if( this.head === value ){
      this.head = this.head.next // se deja huerfano a ese node pasando al siguiente
      return
    }

    let current = this.head
    while( current.next !== null ){
      if( current.next.value === value ){
        current.next = current.next.next
        return
      }

      current = current.next
    }
  }


  print(){
    if( this.head === null ) return console.log('Finished');

    let current = this.head
    while( current.next !== null ){
      console.log(`Node: ${current.next.value}`);
      current = current.next
    }

    console.log('Finished!')
  }

}



const node = new SingleLinkedList()
const removeDups = new RemoveDups();


node.appendToTail(1)
node.appendToTail(2)
node.appendToTail(2)
node.appendToTail(2)
node.appendToTail(3)
node.appendToTail(4)

node.print()

console.log('----------------')

removeDups.removeDups( node.head )
node.print()