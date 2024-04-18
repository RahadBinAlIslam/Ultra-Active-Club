import React, { useEffect, useState } from "react";
import "./Gym.css";
import Exercise from "../Exercise/Exercise";

const Gym = () => {
  const [exercises, setExercises] = useState([]);
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleAddToCart = (exercise) => {
    const newDashboard = [...dashboards, exercise];
    setDashboards(newDashboard);
  };

  return (
    <div>
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
          <h3>Selected Items: {dashboards.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Gym;
