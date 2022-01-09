function nativeSort(array) {
  return array.sort((a, b) => a - b);
}

function sortAlgorithm(array, algorithm) {
  return algorithm(array);
}

function compareSort(array, algorithm) {
  let jsSort = nativeSort(array.slice());
  let mySort = sortAlgorithm(array.slice(), algorithm);

  console.log(JSON.stringify(jsSort) === JSON.stringify(mySort));
}

module.exports = { compareSort };