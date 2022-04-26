import React from "react";
import "./styles.css";

const Input = (props) => {
  return (
    <div className="my-Form">
      <label for={props.name}>{props.text}</label>
      <br />
      <input
        type="text"
        className="ipt"
        id={props.name}
        placeholder={props.text}
      />
    </div>
  );
};

export default Input;
