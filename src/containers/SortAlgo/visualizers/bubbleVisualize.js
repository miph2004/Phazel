import { PRIMARY_COLOR, COMPARE_COLOR, DONE_COLOR } from "./sortingColor";

const bubbleVisualize = (animations, animSpeed, arrayBars) => {
  for (let i = 0; i < animations.length; i++) {
    if (!animations[i].hasOwnProperty("compare")) {
      const [barOneIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;

      setTimeout(() => {
        barOneStyle.backgroundColor = COMPARE_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = DONE_COLOR;
        }, animSpeed);
      }, i * animSpeed);
    } else {
      const [barOneIdx, barTwoIdx] = animations[i].compare;

      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[barTwoIdx];

      const barOneStyle = barOne.style;
      const barTwoStyle = barTwo.style;

      setTimeout(() => {
        barOneStyle.backgroundColor = COMPARE_COLOR;
        barTwoStyle.backgroundColor = COMPARE_COLOR;
        setTimeout(() => {
          if (animations[i].hasOwnProperty("swap")) {
            let temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            let tempValue = barOne.innerText;
            barOne.innerText = barTwo.innerText;
            barTwo.innerText = tempValue;
          }
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = COMPARE_COLOR;
        }, animSpeed);
      }, i * animSpeed);
    }
  }
};
export default bubbleVisualize;
