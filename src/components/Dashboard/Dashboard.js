import React from "react";
import user from "./../../images/user.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

const notify = () => toast("Successfully Completed Today's Exercise!");

const Dashboard = ({ dashboard }) => {
  let time = 0;
  for (const exercise of dashboard) {
    time = time + exercise.time;
  }
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
        <button className="circle">10s</button>
        <button className="circle">20s</button>
        <button className="circle">30s</button>
        <button className="circle">40s</button>
        <button className="circle">50s</button>
      </div>
      <h3>Exercise Details</h3>
      <h5 className="spacing">Exercise Time: {time} seconds</h5>
      <h5 className="spacing">Break time: seconds</h5>
      <button className="completion" onClick={notify}>
        <p>Activity Completed</p>
      </button>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
