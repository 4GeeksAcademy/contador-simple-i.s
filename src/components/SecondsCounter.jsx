import React from "react";

const SecondsCounter = (props) => {
  return (
    <div className="big-counter">
      <div className="clock">
        <i className="fas fa-clock"></i>
      </div>
      <div className="digit">{props.digitSix}</div>
      <div className="digit">{props.digitFive}</div>
      <div className="digit">{props.digitFour}</div>
      <div className="digit">{props.digitThree}</div>
      <div className="digit">{props.digitTwo}</div>
      <div className="digit">{props.digitOne}</div>
    </div>
  );
};

export default SecondsCounter;
