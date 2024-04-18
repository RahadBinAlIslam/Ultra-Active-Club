import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise, handleAddToCart }) => {
  const { name, instructions, age, time, img } = exercise;
  return (
    <div className="exercise">
      <img src={img} alt="" />
      <div className="exercise-info">
        <h2 className="exercise-name">Name: {name}</h2>
        <p>
          <small>{instructions}</small>
        </p>
        <p>For age: {age}</p>
        <p>Time required: {time}s</p>
      </div>
      <button
        onClick={() => {
          handleAddToCart(exercise);
        }}
        className="btn-cart"
      >
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Exercise;
