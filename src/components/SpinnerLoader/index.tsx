import React from "react";
import './styles.css'
const SpinnerLoader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerLoader;
