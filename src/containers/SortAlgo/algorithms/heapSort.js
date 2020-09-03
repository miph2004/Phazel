var arrLength;
function swap(input, indexA, indexB) {
  const temp = input[indexA];
  input[indexA] = input[indexB];
  input[indexB] = temp;
}
const maxHeap = (inputArr, i, animations) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && inputArr[left] > inputArr[max]) {
    max = left;
  }

  if (right < arrLength && inputArr[right] > inputArr[max]) {
    max = right;
  }

  if (max !== i) {
    swap(inputArr, i, max);
    animations.push([i, max]);
    maxHeap(inputArr, max, animations);
  }
};

const heapSort = (inputArr) => {
  const animations = [];

  arrLength = inputArr.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(inputArr, i, animations);
  }

  for (let i = inputArr.length - 1; i > 0; i--) {
    swap(inputArr, 0, i);
    animations.push([i]);
    arrLength--;

    maxHeap(inputArr, 0, animations);
  }

  animations.push([0]);
  return animations;
};
export default heapSort;
