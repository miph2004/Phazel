import { PRIMARY_COLOR, COMPARE_COLOR, DONE_COLOR } from "./sortingColor";

const selectionVisualize = (animations, animSpeed, arrayBars) => {
  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 1) {
      const [barOneIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;

      setTimeout(() => {
        barOneStyle.backgroundColor = COMPARE_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = DONE_COLOR;
        }, animSpeed);
      }, i * animSpeed);
    } else {
      const [barOneIdx, barTwoIdx] = animations[i];

      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[barTwoIdx];

      const barOneStyle = barOne.style;
      const barTwoStyle = barTwo.style;

      setTimeout(() => {
        barOneStyle.backgroundColor = COMPARE_COLOR;
        barTwoStyle.backgroundColor = COMPARE_COLOR;
        setTimeout(() => {
          let tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;

          let tempValue = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempValue;

          barOneStyle.backgroundColor = DONE_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, animSpeed);
      }, i * animSpeed);
    }
  }
};
export default selectionVisualize;
