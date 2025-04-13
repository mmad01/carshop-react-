import React from "react";
import styled from "./inpute.module.css";

function Inpute(props) {
  return (
    <>
      <div className={styled.inputeWarper}>
        <label>{props.label}</label>
        <input 
        name={props.name} 
        onChange={props.handleChange} 
        type={props.type} />
      </div>
    </>
  );
}

export default Inpute;
