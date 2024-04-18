import React from "react";
import user from "./../../images/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
          <br />
          <small>
            <FontAwesomeIcon icon={faLocationDot} />
            Dhaka, Bangladesh
          </small>
        </div>
      </div>
      <div className="metrics">
        <h3>
          75<small>kg</small>
          <br />
          <small>Weight</small>
        </h3>
        <h3>
          6.5<small>in</small>
          <br />
          <small>Height</small>
        </h3>
        <h3>
          25<small>yrs</small>
          <br />
          <small>Age</small>
        </h3>
      </div>
      <h2>Add A Break</h2>
      <h2>Exercise Details</h2>
      <h3>Exercise Time: {time} seconds</h3>
      <h3>Break time: seconds</h3>
      {/* <button className="btn-cart">
        <p>Activity Completed</p>
      </button> */}
    </div>
  );
};

export default Dashboard;
