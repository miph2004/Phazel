/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./GenArrManually.scss";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const GenArrManually = (props) => {
  const { btnLabel, btnClass, submitInput } = props;

  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");

  const toggle = () => setModal(!modal);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <button className={btnClass} onClick={toggle}>
        {btnLabel}
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Generate Array By Hands</ModalHeader>
        <ModalBody>
          <p>
            Nhập vào giá trị
            <code>{"(1<=Giá trị<=100)"}</code> của mỗi phần tử
            <code>{"(5<=Phần tử<=30)"}</code> trong mảng, mỗi phần tử cách nhau
            bởi dấu <code>,</code>
          </p>
          <p>
            Ví dụ:{"  "}
            <code>4,24,20,99,11</code>
          </p>
          <input
            type="text"
            style={{ width: "100%" }}
            placeholder="4,24,20,99,11"
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => submitInput(input)}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default GenArrManually;
