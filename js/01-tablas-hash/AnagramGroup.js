
const getAnagramHash = ( string ) => {
  const letterCounts = Array(26).fill(0);

  for (let c = 0; c < string.length; c++) {
    const charIndex = string.charCodeAt(c) - 'a'.charCodeAt(0);
    letterCounts[charIndex]++;
  }

  return letterCounts.toString();
};

const buildAnagramMap = ( words = ['caso', 'asco'] ) => {
  const map = new Map();

  words.forEach(word => {
    const hash = getAnagramHash(word.toLowerCase());
    if (!map.has(hash)) {
      map.set(hash, []);
    }
    map.get(hash).push(word);
  });

  return map
};

const groupAnagrams = ( words = ['saco', 'arresto', 'programa', 'rastreo', 'caso'] ) => {
  if( words === null || words.length === 0 ) return [];

  const anagramMap = buildAnagramMap(words);
  return [anagramMap.values()];
};


console.log( groupAnagrams() );