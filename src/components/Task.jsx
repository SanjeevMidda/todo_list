import React from "react";

const Task = ({ taskItem }) => {
  console.log(taskItem);

  return <div className="taskContainer">{taskItem}</div>;
};

export default Task;
