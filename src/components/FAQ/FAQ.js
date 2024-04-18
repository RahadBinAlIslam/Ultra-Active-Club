import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="design">
      <h2>
        <center>FAQ</center>
      </h2>
      <h3>Q1. How React Works?</h3>
      <p>
        Ans: React divides the web page into multiple components as it is
        component-based. Each component is a part of the UI design which has its
        own logic and design as shown in the below image. So the component logic
        which is written in JavaScript makes it easy and run faster and can be
        reusable.
      </p>
      <h3>Q2. What is the difference between props and state?</h3>
      <p>
        Ans: The key difference between state and props is that state is managed
        within a component, while props are passed from a parent component to a
        child component. State is used to manage internal component data, while
        props are used to pass data from a parent component to a child
        component.
      </p>
      <h3>Q3. What are other uses of useEffect other than loading data?</h3>
      <p>
        Ans: The other uses of useEffect are retrieving data, direct DOM
        updates, and timers.
      </p>
    </div>
  );
};

export default FAQ;
