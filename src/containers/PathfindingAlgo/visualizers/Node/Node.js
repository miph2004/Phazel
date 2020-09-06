import React from "react";
import "./Node.scss";

const Node = (props) => {
  const { isStart, isFinish } = props;
  const extraClassNames = isStart
    ? "start-node"
    : isFinish
    ? "finish-node"
    : "";

  return <div className={`node ${extraClassNames}`} />;
};
export default Node;
