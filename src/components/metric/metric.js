import React from "react";
import './metric.css'

import MetricComp0 from "../metric-comp/met";



const MetricCard = () => {
  return (
    <div className="mcard">
      <h4>Company Metrics</h4>
      <div className="first">
        <MetricComp0 className="mmcomp1" money={"$406,411.29"} text={"Tatal Revenue"} />
        <MetricComp0 className="mmcomp2" money={"$620"} text={"Total Jobs Avg"} />
        <MetricComp0 className="mmcomp3" money={"655"} text={"Tickets Created"} />
        <MetricComp0 className="mmcomp4" money={"735"} text={"Tickets Scheduled"} />
      </div>
      <div className="second">
        <MetricComp0 className="mmcomp5" money={"$110,448.8"} text={"Outstanding Amount"} />
        <MetricComp0 className="mmcomp6" money={"105"} text={"Memberships Sold"} />
        <MetricComp0 className="mmcomp7" money={"436"} text={"Jobs Completed"} />
        <MetricComp0 className="mmcomp8" money={"65"} text={"Total Cancelled"} />
      </div>
    </div>
  );
}

export default MetricCard;