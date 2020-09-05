import { PRIMARY_COLOR, COMPARE_COLOR, DONE_COLOR } from "./sortingColor";

const heapVisualize = (animations, animSpeed, arrayBars) => {
  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 2) {
      const [barOneIdx, stateCheck] = animations[i];

      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[0];

      const barOneStyle = barOne.style;
      const barTwoStyle = barTwo.style;

      if (barOneIdx !== 0) {
        if (stateCheck === "select") {
          setTimeout(() => {
            barOneStyle.backgroundColor = COMPARE_COLOR;
            barTwoStyle.backgroundColor = COMPARE_COLOR;
          }, i * animSpeed);
        }

        if (stateCheck === "swap") {
          setTimeout(() => {
            let temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            let tempValue = barOne.innerText;
            barOne.innerText = barTwo.innerText;
            barTwo.innerText = tempValue;
            setTimeout(() => {
              barOneStyle.backgroundColor = DONE_COLOR;
            }, animSpeed);
          }, i * animSpeed);
        }
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = DONE_COLOR;
        }, i * animSpeed);
      }
    } else {
      const [barOneIdx, barTwoIdx, stateCheck] = animations[i];

      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[barTwoIdx];

      const barOneStyle = barOne.style;
      const barTwoStyle = barTwo.style;

      if (stateCheck === "select") {
        setTimeout(() => {
          barOneStyle.backgroundColor = COMPARE_COLOR;
          barTwoStyle.backgroundColor = COMPARE_COLOR;
        }, i * animSpeed);
      }
      if (stateCheck === "swap") {
        setTimeout(() => {
          let tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;

          let tempValue = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempValue;

          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, animSpeed);
        }, i * animSpeed);
      }
    }
  }
};
export default heapVisualize;
