import React from "react";
import './met.css'



const MetricComp = ({money, text}) => {
    return (
      <div className="mcomp">
        <div className="money">
            <p className="mny">{money}</p>
        </div>
        <div className="text">
            <p className="txt">{text}</p>
        </div>
      </div>
    );
  }
  
  export default MetricComp;