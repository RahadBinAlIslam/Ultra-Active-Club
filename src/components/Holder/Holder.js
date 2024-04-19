import { React, useState, useEffect } from "react";
import Interval from "../Interval/Interval";
import Break from "../Break/Break";
import "./Holder.css";

const Holder = () => {
  const [intervals, setIntervals] = useState([]);
  const [breaks, setBreaks] = useState([]);

  useEffect(() => {
    fetch("interval.json")
      .then((res) => res.json())
      .then((data) => setIntervals(data));
  }, []);

  const handleAddToCart = (interval) => {
    const newBreaks = [...breaks, interval];
    setBreaks(newBreaks);
  };

  return (
    <div>
      <div>
        <div className="timer">
          {intervals.map((interval) => (
            <Interval
              key={interval.id}
              interval={interval}
              handleAddToCart={handleAddToCart}
            ></Interval>
          ))}
        </div>
        <div>
          <Break breaks={breaks}></Break>
        </div>
      </div>
    </div>
  );
};

export default Holder;
