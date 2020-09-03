const mergeSort = (inputArr) => {
  const animations = [];
  const tempArray = inputArr.slice();

  mergeSortAlgo(inputArr, tempArray, 0, inputArr.length - 1, animations);
  return animations;
};

const mergeSortAlgo = (inputArr, tempArray, startIdx, endIdx, animations) => {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);

  mergeSortAlgo(tempArray, inputArr, startIdx, middleIdx, animations);
  mergeSortAlgo(tempArray, inputArr, middleIdx + 1, endIdx, animations);

  merge(inputArr, tempArray, startIdx, middleIdx, endIdx, animations);
};

const merge = (
  inputArr,
  tempArray,
  startIdx,
  middleIdx,
  endIdx,
  animations
) => {
  let i = startIdx;
  let k = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    //Push 1st time to make their colors change to COMPARE_COLOR
    animations.push([i, j]);
    //Push 2nd time to make their colors change to DONE_COLOR
    animations.push([i, j]);

    if (tempArray[i] <= tempArray[j]) {
      //Push 3rd time to convert height at index k in the inputArr with the smaller value that we compare
      animations.push([k, tempArray[i]]);
      // Assign value at index k in the inputArr equals to the smaller value that we compare and increase k,i
      inputArr[k++] = tempArray[i++];
    } else {
      animations.push([k, tempArray[j]]);
      inputArr[k++] = tempArray[j++];
    }
  }

  //When the left or right of the merge have 1 item left
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);

    animations.push([k, tempArray[i]]);
    inputArr[k++] = tempArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);

    animations.push([k, tempArray[j]]);
    inputArr[k++] = tempArray[j++];
  }
};
export default mergeSort;
