import styled from "./textarea.module.css";
import React from "react";

function Textarea(props) {
  return (
    <div className={styled.textAreaWrapper}>
      <label>{props.label}</label>
      <textarea onChange={props.handleChange}></textarea>
    </div>
  );
}

export default Textarea;
