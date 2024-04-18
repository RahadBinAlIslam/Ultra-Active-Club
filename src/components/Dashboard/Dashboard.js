import React from "react";

const Dashboard = ({ dashboards }) => {
  const { time } = dashboards;
  return (
    <div>
      <h3>Selected Items: {time}</h3>
    </div>
  );
};

export default Dashboard;
