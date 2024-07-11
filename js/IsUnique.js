

//* Mi solucion O(n)
// const isUnique = ( s ) => {
//   let tempValue = '';

//   for (let i = 0; i < s.length; i++) {
//     const value = s[i].toLowerCase();

//     if( tempValue.includes(value) ) return false
//     tempValue += value;
//   }

//   return true
// }

// console.log( isUnique('HelLo WoOrld') )


//* Solucion mejorada
const numberOfChars = 128;

const isUnique = (s) => {
  if( s.length > numberOfChars ) return false;
  const tempValue = new Set();

  for (let i = 0; i < s.length; i++) {
    const value = s[i].toLowerCase();

    if (tempValue.has(value)) return false;
    tempValue.add(value);
  }

  return true;
};

console.log(isUnique('Hello World'));