import React from "react";

const Break = ({ breaks }) => {
  let time = 0;
  for (const interval of breaks) {
    time = interval.time;
  }

  return (
    <div>
      <h5 className="spacing">Break Time: {time} seconds</h5>
    </div>
  );
};

export default Break;
