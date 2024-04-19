import React from "react";
import "./Break.css";

const Break = ({ breaks }) => {
  let gap = 0;
  for (const interval of breaks) {
    gap = interval.time;
  }

  return (
    <div>
      <h3>Exercise Details</h3>
      <h5 className="spacing">Break Time: {gap} seconds</h5>
    </div>
  );
};

export default Break;
