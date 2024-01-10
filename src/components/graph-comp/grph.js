import React from "react";
import './grph.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




const GraphComp = ({data}) => {
  return (
    <BarChart
      width={700}
      height={700}
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#00b36b" barSize={20} />
    </BarChart>
  );
}

export default GraphComp;