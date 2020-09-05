import { swap } from "../../../helperFunction";

const quickSortHelper = (array, start, end, animations) => {
  if (start >= end) {
    if (start !== array.length) {
      animations.push([start]);
    }
    return;
  }
  let pivot = start,
    left = start + 1,
    right = end;
  animations.push([pivot]);
  animations.push([left, right, "startPoint"]);
  while (right >= left) {
    let moving = [false, false];
    if (array[right] < array[pivot] && array[left] > array[pivot]) {
      animations.push([left, right, "swap"]);
      swap(array, left, right);
    }
    if (array[left] <= array[pivot]) {
      left++;
      if (left <= right) moving[0] = left;
    }
    if (array[right] >= array[pivot]) {
      right--;
      if (right >= left) moving[1] = right;
    }

    if (!(moving[0] === false && moving[1] === false)) {
      animations.push([...moving, "moving"]);
    }
  }
  if (pivot !== right) {
    animations.push([right, pivot, "pivotswap"]);
    swap(array, right, pivot);
  }
  quickSortHelper(array, start, right - 1, animations);
  quickSortHelper(array, right + 1, end, animations);
};

const quickSort = (inputArr) => {
  const animations = [];
  quickSortHelper(inputArr, 0, inputArr.length - 1, animations);
  return animations;
};
export default quickSort;
