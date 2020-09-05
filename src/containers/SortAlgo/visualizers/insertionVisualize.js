import { COMPARE_COLOR, DONE_COLOR } from "./sortingColor";

const insertionVisualize = (animations, animSpeed, arrayBars) => {
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
      const [insertIdx, replaceIdx, stateCheck] = animations[i];

      const insertBar = arrayBars[insertIdx];
      const replaceBar = arrayBars[replaceIdx];

      const insertBarStyle = insertBar.style;
      const replaceBarStyle = replaceBar.style;

      if (stateCheck === "select") {
        setTimeout(() => {
          insertBarStyle.backgroundColor = COMPARE_COLOR;
          replaceBarStyle.backgroundColor = COMPARE_COLOR;
        }, i * animSpeed);
      }
      if (stateCheck === "swap") {
        setTimeout(() => {
          //Đẩy các cột lên trên để insert phần tử khác vào
          for (let i = insertIdx; i > replaceIdx; i--) {
            const barOne = arrayBars[i];
            const barTwo = arrayBars[i - 1];

            const barOneStyle = barOne.style;
            const barTwoStyle = barTwo.style;

            let temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            let tempValue = barOne.innerText;
            barOne.innerText = barTwo.innerText;
            barTwo.innerText = tempValue;
          }
          setTimeout(() => {
            replaceBarStyle.backgroundColor = DONE_COLOR;
            insertBarStyle.backgroundColor = DONE_COLOR;
          }, animSpeed);
        }, i * animSpeed);
      }
    }
  }
};
export default insertionVisualize;
