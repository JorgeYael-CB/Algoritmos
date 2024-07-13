const matrixExample = [
  [2, 1, 3, 0, 2],
  [7, 4, 1, 3, 8],
  [4, 0, 1, 2, 1],
  [9, 3, 4, 1, 9],
];

const hasFirstRowAnyZero = ( matrix ) => {
  for (let i = 0; i < matrix[0].length; i++) {
    if( matrix[0][i] === 0 ) return true
  }

  return false;
}

const hasFirstColAnyZero = ( matrix ) => {
  for (let i = 0; i < matrix.length; i++) {
    if( matrix[i][0] === 0 ) return true
  }

  return false;
}

const checkForZeroes = ( matrix ) => {

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if( matrix[row][col] === 0 ){
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

}

const setRowToZero = ( matrix, row ) => {
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[row][col] = 0;
  }
}

const setColToZero = ( matrix, col ) => {
  for (let row = 0; row < matrix.length; row++) {
    matrix[0][col] = 0;
  }
}


const proccesColumns = ( matrix ) => {
  for (let col = 0; col < matrix[0].length; col++) {
    if( matrix[0][col] === 0 ){
      setColToZero(matrix, col);
    }
  }
};

const proccesRows = ( matrix ) => {
  for (let row = 0; row < matrix.length; row++) {
    if( matrix[row][0] === 0 ){
      setRowToZero(matrix, row);
    }
  }
}


const zeroMatrix = (matrix) => {
  const firstRowHasZero = hasFirstRowAnyZero(matrix);
  const firstColHasZero = hasFirstColAnyZero(matrix);

  checkForZeroes(matrix);

  proccesRows(matrix);
  proccesColumns(matrix);

  if( firstRowHasZero ){
    setRowToZero(matrix, 0);
  }

  if( firstColHasZero ){
    setColToZero(matrix, 0);
  }
}

zeroMatrix(matrixExample);

console.table( matrixExample );