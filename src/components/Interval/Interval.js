import React from "react";
import "./Interval.css";

const Interval = ({ interval, handleAddToCart }) => {
  const { time } = interval;
  return (
    <div>
      <button className="circle" onClick={() => handleAddToCart(interval)}>
        {time}s
      </button>
    </div>
  );
};

export default Interval;
