import { React, useState, useEffect } from "react";
import user from "./../../images/user.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";
import Interval from "../Interval/Interval";

const notify = () => toast("Successfully Completed Today's Exercise!");

const Dashboard = ({ dashboard }) => {
  const [intervals, setIntervals] = useState([]);
  let time = 0;
  for (const exercise of dashboard) {
    time = time + exercise.time;
  }

  useEffect(() => {
    fetch("interval.json")
      .then((res) => res.json())
      .then((data) => setIntervals(data));
  }, []);

  return (
    <div className="dashboard">
      <div className="user">
        <img src={user} alt="" />
        <div className="user-info">
          <h4>Rahad Bin Al Islam</h4>
          <p>Bodybuilder</p>
        </div>
      </div>
      <div className="metrics">
        <h4>
          75<small className="highlight">kg</small>
          <br />
          <small className="highlight">Weight</small>
        </h4>
        <h4>
          6.5<small className="highlight">in</small>
          <br />
          <small className="highlight">Height</small>
        </h4>
        <h4>
          25<small className="highlight">yrs</small>
          <br />
          <small className="highlight">Age</small>
        </h4>
      </div>
      <h3>Add A Break</h3>
      <div className="timer">
        {intervals.map((interval) => (
          <Interval key={interval.id} interval={interval}></Interval>
        ))}
      </div>
      <h3>Exercise Details</h3>
      <h5 className="spacing">Exercise Time: {time} seconds</h5>
      <h5 className="spacing">Break Time: {time} seconds</h5>
      <button className="completion" onClick={notify}>
        <p>Activity Completed</p>
      </button>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
