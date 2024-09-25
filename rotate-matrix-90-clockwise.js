function rorateMatrix90Clockwise(matrix) {
  // step 1: transpose matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      // Swap elements
      [matrix[i][j], matrixp[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // step 2 reverse each row
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  return matrix;
}
