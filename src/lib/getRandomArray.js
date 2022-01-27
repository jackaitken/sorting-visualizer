function getRandomArray(size) {
  let randomizedArray = [];
  let min = 1;
  let max = 350;

  for (let i = 0; i < size; i++) {
    let randNum = Math.floor(Math.random() * (max - min) + min)
    while(randomizedArray.includes(randNum)) {
      randNum = Math.floor(Math.random() * (max - min) + min);
    }
    randomizedArray.push(randNum);
  }
  return randomizedArray;
}

module.exports = { getRandomArray };