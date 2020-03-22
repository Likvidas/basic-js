module.exports = function countCats(matrix) {
  let catsArr = matrix.join(',').split(',');
  let result = 0;

  for (let i = 0; i < catsArr.length; i++) {
    if (catsArr[i] == '^^') {
      result++;
    }

  }
  return result;
};