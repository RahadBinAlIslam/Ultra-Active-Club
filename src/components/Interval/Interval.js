import React from "react";
import "./Interval.css";

const Interval = ({ interval }) => {
  const { time } = interval;
  return (
    <div>
      <button className="circle">{time}s</button>
    </div>
  );
};

export default Interval;
