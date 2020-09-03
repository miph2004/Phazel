import {
  PRIMARY_COLOR,
  COMPARE_COLOR,
  SWAP_COLOR,
  DONE_COLOR,
} from "./sortingColor";

const heapVisualize = (animations, animSpeed, arrayBars) => {
  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 1) {
      const [barOneIdx] = animations[i];

      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[0];

      const barOneStyle = barOne.style;
      const barTwoStyle = barTwo.style;

      if (barOneIdx !== 0) {
        setTimeout(() => {
          barOneStyle.backgroundColor = COMPARE_COLOR;
          barTwoStyle.backgroundColor = COMPARE_COLOR;
          setTimeout(() => {
            let temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            let tempValue = barOne.innerText;
            barOne.innerText = barTwo.innerText;
            barTwo.innerText = tempValue;

            barOneStyle.backgroundColor = DONE_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, animSpeed);
        }, i * animSpeed);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = DONE_COLOR;
        }, i * animSpeed);
      }
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
          let temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;

          let tempValue = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempValue;

          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, animSpeed);
      }, i * animSpeed);
    }
  }
};
export default heapVisualize;
