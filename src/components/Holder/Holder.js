import { React, useState, useEffect } from "react";
import Interval from "../Interval/Interval";
import Break from "../Break/Break";
import "./Holder.css";
import { addToDb, getStoredCart } from "../../Utilities/fakedb";

const Holder = () => {
  const [intervals, setIntervals] = useState([]);
  const [breaks, setBreaks] = useState([]);

  useEffect(() => {
    fetch("interval.json")
      .then((res) => res.json())
      .then((data) => setIntervals(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const time in storedCart) {
      const addedProduct = intervals.find((interval) => interval.time === time);
      if (addedProduct) {
        const gap = storedCart[time];
        addedProduct.gap = gap;
        savedCart.push(addedProduct);
      }
    }
    setBreaks(savedCart);
  }, [intervals]);

  const handleAddToCart = (selectedInterval) => {
    let newBreaks = [];
    const exists = breaks.find(
      (interval) => interval.time === selectedInterval.time
    );
    if (!exists) {
      selectedInterval.gap = 1;
      newBreaks = [...breaks, selectedInterval];
    } else {
      const rest = breaks.filter(
        (interval) => interval.time !== selectedInterval.time
      );
      exists.gap = exists.gap + 1;
      newBreaks = [...rest, exists];
    }
    setBreaks(newBreaks);
    addToDb(selectedInterval.time);
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
