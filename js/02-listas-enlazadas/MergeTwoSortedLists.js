import { Node } from "./Node.js";
import { SingleLinkedList } from "./SingleLinkedList.js";



export class MergeTwoSortedLists {

  constructor(){
    this.node = new Node(-1);
  }


  mergeTwoSortedLists( lists1, lists2 ){
    let current = this.node;

    while (lists1 !== null && lists2 !== null) {
      if (lists1.value <= lists2.value) {
        current.next = lists1
        lists1 = lists1.next;
      } else {
        current.next = lists2
        lists2 = lists2.next;
      }

      current = current.next
    }

    if( list1 !== null ){
      current.next = list1
    } else {
      current.next = list2
    }

    return this.node.next
  }
}


const mergeTwoSortedLists = new MergeTwoSortedLists();



// Crear listas enlazadas para pruebas
const list1 = new SingleLinkedList();
const list2 = new SingleLinkedList();

list1.appendToTail(1)
list1.appendToTail(2)
list1.appendToTail(3)
list1.appendToTail(4)

list2.appendToTail(1)
list2.appendToTail(3)
list2.appendToTail(4)


// Instanciar MergeTwoSortedLists y combinar listas
let newMerge = mergeTwoSortedLists.mergeTwoSortedLists(list1.head, list2.head);

while( newMerge !== null ){
  console.log(`Node: ${newMerge.value}`);
  newMerge = newMerge.next || null
}