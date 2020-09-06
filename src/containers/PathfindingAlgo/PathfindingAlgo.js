import React from "react";
import "./PathfindingAlgo.scss";

import Node from "./visualizers/Node/Node";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45;

export default class PathfindingAlgo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
    this.initGrid = this.initGrid.bind(this);
  }

  initGrid() {
    const nodes = [];
    for (let row = 0; row < 18; row++) {
      let currentRow = [];
      for (let col = 0; col < 52; col++) {
        const newNode = {
          row,
          col,
          isStart: row === START_NODE_ROW && col === START_NODE_COL,
          isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        };
        currentRow.push(newNode);
      }
      nodes.push(currentRow);
    }
    this.setState({
      nodes,
    });
  }

  componentDidMount() {
    this.initGrid();
  }

  render() {
    const { nodes } = this.state;
    console.log(nodes);

    return (
      <div className="PA-container">
        <div className="grid-container">
          {nodes.map((row, rowIdx) => {
            return (
              <div className="grid" key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  return (
                    <Node
                      key={nodeIdx}
                      isStart={node.isStart}
                      isFinish={node.isFinish}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
