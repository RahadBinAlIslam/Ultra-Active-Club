import { React, useEffect, useState } from "react";
import logo from "./../../images/logo.png";
import "./Gym.css";
import Exercise from "../Exercise/Exercise";
import Dashboard from "../Dashboard/Dashboard";

const Gym = () => {
  const [exercises, setExercises] = useState([]);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleAddToCart = (exercise) => {
    const newDashboard = [...dashboard, exercise];
    setDashboard(newDashboard);
  };

  return (
    <div>
      <div>
        <div className="intro">
          <img src={logo} alt="" />
          <h2>Masud Fitness Empire</h2>
        </div>
        <h3>Select today's exercise</h3>
      </div>
      <div className="gym-container">
        <div className="exercise-container">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              handleAddToCart={handleAddToCart}
            ></Exercise>
          ))}
        </div>
        <div className="dashboard-container">
          <Dashboard dashboard={dashboard}></Dashboard>
        </div>
      </div>
    </div>
  );
};

export default Gym;
