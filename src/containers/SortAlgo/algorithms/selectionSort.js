import { swap } from "../../../helperFunction";

const selectionSort = (inputArr) => {
  let animations = [];
  let firstElemIdx = 0;

  while (inputArr.length !== 0) {
    let min = Math.min(...inputArr);
    let minIdx = inputArr.indexOf(min);

    if (minIdx !== 0) {
      swap(inputArr, 0, minIdx);
      animations.push([firstElemIdx, minIdx + firstElemIdx, "select"]);
      animations.push([firstElemIdx, minIdx + firstElemIdx, "swap"]);
    } else {
      animations.push([firstElemIdx]);
    }

    inputArr.splice(0, 1);
    firstElemIdx++;
  }
  return animations;
};
export default selectionSort;
