import React from "react";
import "./SortAlgo.scss";

import GenArrManually from "../../components/GenArrayButtons/GenArrManually";
//Hepler function
import { randomIntFromInterval } from "../../helperFunction";

//Algorithms
import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertionSort";
import mergeSort from "./algorithms/mergeSort";
import heapSort from "./algorithms/heapSort";

//Visualizer
import bubbleVisualize from "./visualizers/bubbleVisualize";
import selectionVisualize from "./visualizers/selectionVisualize";
import insertionVisualize from "./visualizers/insertionVisualize";
import mergeVisualize from "./visualizers/mergeVisualize";
import heapVisualize from "./visualizers/heapVisualize";
import { PRIMARY_COLOR } from "./visualizers/sortingColor";

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
    this.handleGenArrManually = this.handleGenArrManually.bind(this);
    this.handleGenNewArr = this.handleGenNewArr.bind(this);
    this.handleGenNewSpeed = this.handleGenNewSpeed.bind(this);
    this.setSortAlgo = this.setSortAlgo.bind(this);

    this.runSort = this.runSort.bind(this);
    this.checkSortAlgo = this.checkSortAlgo.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const arr = [];
    for (let i = 0; i < arrLengthDefault; i++) {
      arr.push(randomIntFromInterval(1, 100));
    }

    this.setState({
      array: arr,
    });
  }

  //Generate new condition

  handleGenArrManually(input) {
    let userInput = input.trim();
    let arr = userInput.split(",").map((item) => Number(item));
    let checkValue = arr.findIndex((val) => val > 100 || val < 1);
    let hasUnacceptChar = /\s|[a-z]/gi.test(userInput);

    if (
      hasUnacceptChar ||
      checkValue !== -1 ||
      arr.length < 5 ||
      arr.length > 30
    ) {
      alert("Bạn đã tạo mảng không hợp lệ!!!");
    } else {
      this.setState({
        array: arr,
        arrLength: arr.length,
      });
    }
  }

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

  //Run sorting function
  runSort(array, animSpeed, sortAlgo, arrayBars) {
    if (sortAlgo === "") {
      alert("Bạn chưa chọn thuật toán");
    } else {
      switch (sortAlgo) {
        case "bubbleSort":
          const bubbleAnimations = bubbleSort(array.slice());
          bubbleVisualize(bubbleAnimations, animSpeed, arrayBars);
          break;

        case "selectionSort":
          const selectionAnimations = selectionSort(array.slice());
          selectionVisualize(selectionAnimations, animSpeed, arrayBars);
          break;

        case "insertionSort":
          const insertionSortAnimations = insertionSort(array.slice());
          insertionVisualize(insertionSortAnimations, animSpeed, arrayBars);
          break;

        case "mergeSort":
          const mergeSortAnimations = mergeSort(array.slice());
          mergeVisualize(mergeSortAnimations, animSpeed, arrayBars);
          break;

        case "heapSort":
          const heapSortAnimations = heapSort(array.slice());
          heapVisualize(heapSortAnimations, animSpeed, arrayBars);
          break;

        default:
          alert("Not implement yet");
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

    const arrayBars = document.getElementsByClassName("array-bar");

    const arr = arrLength
      ? array.slice(0, arrLength)
      : array.slice(0, arrLengthDefault);

    const animationSpeed = animSpeed > 0 ? animSpeed : Math.abs(animSpeed);

    const bubbleSortActive = sortAlgo === "bubbleSort";
    const selectionSortActive = sortAlgo === "selectionSort";
    const insertionSortActive = sortAlgo === "insertionSort";
    const mergeSortActive = sortAlgo === "mergeSort";
    const heapSortActive = sortAlgo === "heapSort";
    const quickSortActive = sortAlgo === "quickSort";

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
                  height: `${(value * 4.5) / 14}rem`,
                  width: `${barWidth / 14}rem`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: PRIMARY_COLOR,
                }}
              >
                {arrLength <= 30 ? <span>{value}</span> : ""}
              </div>
            );
          })}
        </div>
        <div className="option-wrapper">
          <div className="options">
            <div className="algoButtons">
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
              <button
                className={
                  insertionSortActive
                    ? "btn btn__algoOptions btn__selected"
                    : "btn btn__algoOptions"
                }
                value="insertionSort"
                onClick={this.setSortAlgo}
              >
                Insertion Sort
              </button>
              <button
                className={
                  mergeSortActive
                    ? "btn btn__algoOptions btn__selected"
                    : "btn btn__algoOptions"
                }
                value="mergeSort"
                onClick={this.setSortAlgo}
              >
                Merge Sort
              </button>
              <button
                className={
                  heapSortActive
                    ? "btn btn__algoOptions btn__selected"
                    : "btn btn__algoOptions"
                }
                value="heapSort"
                onClick={this.setSortAlgo}
              >
                Heap Sort
              </button>
              <button
                className={
                  quickSortActive
                    ? "btn btn__algoOptions btn__selected"
                    : "btn btn__algoOptions"
                }
                value="quickSort"
                onClick={this.setSortAlgo}
              >
                Quick Sort
              </button>
            </div>
            <div className="range-slider range-speed">
              <label className="labelText">Choose Speed</label>
              <input
                type="range"
                className="range-slider__range"
                onChange={this.handleGenNewSpeed}
                min={-1000}
                max={3}
                value={animSpeed}
                step={1}
                style={{ width: 500 }}
              />
              <span className="range-slider__value">{animationSpeed}ms</span>
            </div>
            <div className="range-slider range-arrSize">
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
          <div className="main-button">
            <div className="genNewArr">
              <button
                className="btn btn__genArrOptions btn__focus btn__medium"
                onClick={this.resetArray}
              >
                Generate Array Automatic
              </button>

              <GenArrManually
                btnLabel="Generate Array Manually"
                btnClass="btn btn__genArrOptions btn__focus btn__medium"
                submitInput={this.handleGenArrManually}
              />
            </div>

            <button
              className="btn btn__sort btn__large"
              onClick={() =>
                this.runSort(arr, animationSpeed, sortAlgo, arrayBars)
              }
            >
              SORT!!!
            </button>

            {/* <button className="sortButton" onClick={this.checkSortAlgo}>
              CHECK SORT!!!
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}
