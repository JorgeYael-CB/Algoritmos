


export class RemoveDups {

  constructor(){}

  removeDups( head ){
    if( head === null ) return;
    let foundValues = new Set();
    let current = head;

    foundValues.add( current.value );
    while( current !== null && current.next !== null ){
      const has = foundValues.has( current.next )

      // devuelve true o false ya que no acepta valores repetidos
      if( !has ){
        foundValues.add(current.next.value)
        current.next = current.next.next;
      }

      current = current.next
    }
  }

}