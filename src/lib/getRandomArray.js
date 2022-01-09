function getRandomArray() {
  let randomizedArray = [];
  let min = 1;
  let max = 100;

  for (let i = 0; i < 175; i++) {
    let randNum = Math.floor(Math.random() * (max - min) + min);
    randomizedArray.push(randNum);
  }
  
  return randomizedArray;
}

module.exports = {
  getRandomArray
}