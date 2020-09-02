const insertionSort = (inputArr) => {
  let arr = inputArr.slice();
  let animations = [];
  animations.push([0]);
  for (let i = 1; i < arr.length; i++) {
    let replaceIdx = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        replaceIdx = j;
      }
    }
    if (replaceIdx !== -1) {
      let insertItem = arr.splice(i, 1);
      arr.splice(replaceIdx, 0, ...insertItem);
      animations.push([i, replaceIdx]);
    } else {
      animations.push([i]);
    }
  }
  return animations;
};
export default insertionSort;
