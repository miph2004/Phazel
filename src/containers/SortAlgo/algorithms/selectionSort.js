const selectionSort = (inputArr) => {
  let animations = [];
  let firstElemIdx = 0;

  while (inputArr.length !== 0) {
    let min = Math.min(...inputArr);
    let minIdx = inputArr.indexOf(min);

    if (minIdx !== 0) {
      let temp = inputArr[0];
      inputArr[0] = inputArr[minIdx];
      inputArr[minIdx] = temp;
      animations.push([firstElemIdx, minIdx + firstElemIdx]);
    } else {
      animations.push([firstElemIdx]);
    }

    inputArr.splice(0, 1);
    firstElemIdx++;
  }
  console.log(animations);

  return animations;
};
export default selectionSort;
