import React from "react";
import { randomIntFromInterval } from "../../helperFunction";
import "./SortAlgo.scss";
import bubleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";

const PRIMARY_COLOR = "#3498db";
const COMPARE_COLOR = "#e74c3c";
const DONE_COLOR = "#2ecc71";
const arrLengthDefault = 250;
const animSpeedDefault = 3;

export default class SortAlgo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      arrLength: arrLengthDefault,
      animSpeed: animSpeedDefault,
      sortAlgo: "",
    };

    this.resetArray = this.resetArray.bind(this);
    this.handleGenNewArr = this.handleGenNewArr.bind(this);
    this.handleGenNewSpeed = this.handleGenNewSpeed.bind(this);
    this.setSortAlgo = this.setSortAlgo.bind(this);

    this.bubbleSort = this.bubbleSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);

    this.runSort = this.runSort.bind(this);
    this.checkSortAlgo = this.checkSortAlgo.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const arr = [];
    for (let i = 0; i < arrLengthDefault; i++) {
      arr.push(randomIntFromInterval(12, 480));
    }

    this.setState({
      array: arr,
    });
  }

  //Generate new condition
  handleGenNewArr(event) {
    this.setState({
      arrLength: Number(event.target.value),
    });
  }

  handleGenNewSpeed(event) {
    this.setState({
      animSpeed: Number(event.target.value),
    });
  }

  setSortAlgo(event) {
    this.setState({
      sortAlgo: event.target.value,
    });
  }

  //Sorting algorithms
  bubbleSort(array, animSpeed) {
    const animations = bubleSort(array.slice());
    console.log(animations);
    const arrayBars = document.getElementsByClassName("array-bar");
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
  }

  selectionSort(array, animSpeed) {
    const animations = selectionSort(array.slice());
    console.log(animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    console.log(arrayBars);

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
  }

  //Run sorting function
  runSort(array, animSpeed, sortAlgo) {
    if (sortAlgo === "") {
      alert("Bạn chưa chọn thuật toán");
    } else {
      switch (sortAlgo) {
        case "bubbleSort":
          this.bubbleSort(array, animSpeed);
          break;

        case "selectionSort":
          this.selectionSort(array, animSpeed);
          break;

        default:
          alert("Error");
          break;
      }
    }
  }

  //Check Sort Algorithms
  checkSortAlgo() {
    const rightSort = this.state.array.slice().sort((a, b) => a - b);
    const mySort = selectionSort(this.state.array.slice());

    if (rightSort.length !== mySort.length) console.log(false);
    for (let i = 0; i < rightSort.length; i++) {
      if (rightSort[i] !== mySort[i]) console.log(false);
    }
  }

  render() {
    const { array, arrLength, animSpeed, sortAlgo } = this.state;

    const arr = arrLength
      ? array.slice(0, arrLength)
      : array.slice(0, arrLengthDefault);

    const animationSpeed =
      animSpeed > 0 ? animSpeed * 10 : Math.abs(animSpeed) * 10;

    const bubbleSortActive = sortAlgo === "bubbleSort";
    const selectionSortActive = sortAlgo === "selectionSort";

    const barWidth = 750 / arrLength;
    return (
      <div className="sortalgo-container">
        <div className="array-wrapper">
          {arr.map((value, idx) => {
            return (
              <div
                className="array-bar"
                key={
                  ((idx + randomIntFromInterval(1, 10000)) *
                    randomIntFromInterval(0, 10000)) /
                  randomIntFromInterval(0, 10000)
                }
                style={{
                  height: `${value}px`,
                  width: `${barWidth}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: PRIMARY_COLOR,
                }}
              >
                {arrLength < 30 ? <span>{value}</span> : ""}
              </div>
            );
          })}
        </div>
        <div className="option-wrapper">
          <div className="algorithms-button">
            <label className="labelText">Choose Algorithm</label>
            <button
              className={
                bubbleSortActive
                  ? "btn btn__algoOptions btn__selected"
                  : "btn btn__algoOptions"
              }
              value="bubbleSort"
              onClick={this.setSortAlgo}
            >
              Bubble Sort
            </button>
            <button
              className={
                selectionSortActive
                  ? "btn btn__algoOptions btn__selected"
                  : "btn btn__algoOptions"
              }
              value="selectionSort"
              onClick={this.setSortAlgo}
            >
              Selection Sort
            </button>
          </div>

          <div className="main-button">
            <button
              className="btn btn__algoOptions btn__focus"
              onClick={this.resetArray}
            >
              Generate New Array
            </button>
            <button
              className="btn btn__sort"
              onClick={() => this.runSort(arr, animationSpeed, sortAlgo)}
            >
              SORT!!!
            </button>

            {/* <button className="sortButton" onClick={this.checkSortAlgo}>
              CHECK SORT!!!
            </button> */}
          </div>
          <div className="options">
            <div className="range-slider">
              <label className="labelText">Choose Speed</label>
              <input
                type="range"
                className="range-slider__range"
                onChange={this.handleGenNewSpeed}
                min={-200}
                max={1}
                value={animSpeed}
                step={1}
                style={{ width: 500 }}
              />
              <span className="range-slider__value">{animationSpeed}ms</span>
            </div>
            <div className="range-slider">
              <label className="labelText">Choose Array Size</label>
              <input
                type="range"
                className="range-slider__range"
                onChange={this.handleGenNewArr}
                min={5}
                max={250}
                value={arrLength}
                step={1}
                style={{ width: 500 }}
              />
              <span className="range-slider__value">{arrLength}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
