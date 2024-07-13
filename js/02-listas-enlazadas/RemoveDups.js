


export class RemoveDups {

  constructor(){}

  removeDups( head ){
    if( head === null ) return;
    let foundValues = new Set();
    let current = head;

    foundValues.add( current.value );
    while( current !== null && current.next !== null ){
      const has = foundValues.has( current.next.value )

      if( !has ){
        foundValues.add(current.next.value)
        current = current.next;
      } else {
        current.next = current.next.next;
      }
    }
  }

}