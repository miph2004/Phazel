import { swap } from "../../../helperFunction";

const bubbleSort = (inputArr) => {
  let animations = [];
  let swapped;
  let whenDoneLength = 0;
  do {
    swapped = false;
    let len = inputArr.length;
    for (let i = 0; i < len - 1; i++) {
      let anim = {};
      anim.compare = [i, i + 1];
      if (inputArr[i] > inputArr[i + 1]) {
        anim.swap = [i, i + 1];
        swap(inputArr, i, i + 1);
        swapped = true;
      }
      animations.push(anim);
    }
    animations.push([len - 1]);
    inputArr.splice(len - 1, 1);
    whenDoneLength = len - 1;
  } while (swapped);
  for (let i = whenDoneLength - 1; i >= 0; i--) {
    animations.push([i]);
  }
  return animations;
};
export default bubbleSort;
