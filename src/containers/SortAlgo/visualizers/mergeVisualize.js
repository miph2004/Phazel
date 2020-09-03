import { COMPARE_COLOR, DONE_COLOR } from "./sortingColor";

const mergeVisualize = (animations, animSpeed, arrayBars) => {
  for (let i = 0; i < animations.length; i++) {
    //The 3rd push is the one that convert heigt
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? COMPARE_COLOR : DONE_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * animSpeed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOne = arrayBars[barOneIdx];

        const barOneStyle = barOne.style;
        barOneStyle.height = `${(newHeight * 4.5) / 14}rem`;
        if (arrayBars.length <= 30) {
          barOne.innerText = `${newHeight}`;
        }
      }, i * animSpeed);
    }
  }
};
export default mergeVisualize;
