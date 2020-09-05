import { PRIMARY_COLOR, COMPARE_COLOR, DONE_COLOR } from "./sortingColor";

const quickVisualize = (animations, animSpeed, arrayBars) => {
  for (let i = 0; i < animations.length; i++) {
    //Nếu phần tử đó là pivot
    if (animations[i].length === 1) {
      const [pivotIdx] = animations[i];
      setTimeout(() => {
        arrayBars[pivotIdx].style.backgroundColor = DONE_COLOR;
      }, i * animSpeed);
    } else {
      const [barOneIdx, barTwoIdx, stateCheck] = animations[i];

      //Nếu cặp phần tử là điểm left, right bắt đầu
      if (stateCheck === "startPoint") {
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = COMPARE_COLOR;
          arrayBars[barTwoIdx].style.backgroundColor = COMPARE_COLOR;
        }, i * animSpeed);
      }

      //Dịch chuyển left right
      if (stateCheck === "moving") {
        //Dịch chuyển cả left và right
        if (barOneIdx && barTwoIdx) {
          setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = COMPARE_COLOR;
            arrayBars[barTwoIdx].style.backgroundColor = COMPARE_COLOR;
            if (!animations[i - 1].includes("swap")) {
              arrayBars[barOneIdx - 1].style.backgroundColor = PRIMARY_COLOR;
              arrayBars[barTwoIdx + 1].style.backgroundColor = PRIMARY_COLOR;
            }
          }, i * animSpeed);
        }
        // Dịch chuyển 1 hướng left hoặc right
        else {
          const nextBarIdx = barOneIdx !== false ? barOneIdx : barTwoIdx;
          const prevBarIdx =
            nextBarIdx === barOneIdx ? nextBarIdx - 1 : nextBarIdx + 1;
          const nextBarStyle = arrayBars[nextBarIdx].style;
          const prevBarStyle = arrayBars[prevBarIdx].style;

          setTimeout(() => {
            nextBarStyle.backgroundColor = COMPARE_COLOR;
            prevBarStyle.backgroundColor = PRIMARY_COLOR;
          }, i * animSpeed);
        }
      }

      //Swap 2 phần tử
      if (stateCheck === "swap" || stateCheck === "pivotswap") {
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];

        const barOneStyle = barOne.style;
        const barTwoStyle = barTwo.style;

        setTimeout(() => {
          let tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;

          let tempVal = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempVal;

          setTimeout(() => {
            if (stateCheck === "swap") {
              //Swap phần tử left và right
              barOneStyle.backgroundColor = PRIMARY_COLOR;
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }
            //Swap phần tử pivot
            else {
              barOneStyle.backgroundColor = DONE_COLOR;
              barTwoStyle.backgroundColor = DONE_COLOR;
            }
          }, animSpeed);
        }, i * animSpeed);
      }
    }
  }
};
export default quickVisualize;
