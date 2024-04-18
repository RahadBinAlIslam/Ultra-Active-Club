import React from "react";
import user from "./../../images/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

//toast.configure();

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
        <h4>
          75<small>kg</small>
          <br />
          <small>Weight</small>
        </h4>
        <h4>
          6.5<small>in</small>
          <br />
          <small>Height</small>
        </h4>
        <h4>
          25<small>yrs</small>
          <br />
          <small>Age</small>
        </h4>
      </div>
      <h3>Add A Break</h3>
      <div className="timer">
        <button>10s</button>
        <button>20s</button>
        <button>30s</button>
        <button>40s</button>
        <button>50s</button>
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
