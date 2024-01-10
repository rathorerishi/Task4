import React from "react";
import './graph.css'
import GraphComp from "../graph-comp/grph";


const GraphCard = () => {
  const data1 = [
    { name: 'Everett', value: 64000 },
    { name: 'Seattle', value: 60000 },
    { name: 'Lynwood', value: 34500 },
    { name: 'Bothell', value: 33500 },
    { name: 'Mukilteo', value: 31000 },
    { name: 'Edmonds', value: 24500 },
    // Add more data as needed
  ];
  const data2 = [
    { name: 'Service Plumbing', value: 142000 },
    { name: 'Bid Work Hvac', value: 85000 },
    { name: 'Service HVAC', value: 60000 },
    { name: 'Bid Work Plumbing', value: 58000 },
    { name: 'HWT Replacement', value: 23000 },
    { name: 'Maintainance', value: 22000 },
    { name: 'Material Sale', value: 1000 },

    // Add more data as needed
  ];
  return (
    <div className="gcard">
      <div className="div1">
        <h2>Revenue by Job Location</h2>
        <div className="grphh1"><GraphComp data={data1} /></div>
      </div>
      <div className="div2">
        <h2>Revenue by Job Type</h2>
        <div className="grphh2"><GraphComp data={data2} /></div>
      </div>

    </div>
  );
}

export default GraphCard;