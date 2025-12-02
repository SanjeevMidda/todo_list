import React from "react";

const Task = ({ taskItem }) => {
  console.log(taskItem);

  return (
    <div className="taskContainer">
      <li>{taskItem}</li>

      <div className="actions">
        <label>
          <input type="checkbox"></input>
        </label>
        <button>🗑️</button>
      </div>
    </div>
  );
};

export default Task;
