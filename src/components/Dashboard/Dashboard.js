import React from "react";
import user from "./../../images/user.jpg";
import "./Dashboard.css";

const Dashboard = ({ dashboard }) => {
  let time = 0;
  for (const exercise of dashboard) {
    time = time + exercise.time;
  }
  return (
    <div className="dashboard">
      <div className="user">
        <img src={user} alt="" />
        <div>
          <h5>Rahad Bin Al Islam</h5>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <h2>Add A Break</h2>
      <h2>Exercise Details</h2>
      <h3>Exercise Time: {time} seconds</h3>
      <h3>Break time: </h3>
      {/* <button className="btn-cart">
        <p>Activity Completed</p>
      </button> */}
    </div>
  );
};

export default Dashboard;
