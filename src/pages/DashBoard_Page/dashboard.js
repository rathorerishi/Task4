import React from 'react';
import './dashboard.css';

import MetricCard from "../../components/metric/metric";
import GraphCard from "../../components/graph/graph";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MetricCard className="metric-card1"/>
      <GraphCard className="graph-card"/>

    </div>
  );
};

export default Dashboard;
