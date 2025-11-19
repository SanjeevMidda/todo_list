import React from "react";

const Task = ({ taskItem }) => {
  console.log(taskItem);

  return (
    <div className="taskContainer">
      <p>D</p>
      <li>{taskItem}</li>

      <div className="actions">
        <button>🗑️</button>

        <label>
          <input type="checkbox"></input>
        </label>
      </div>
    </div>
  );
};

export default Task;
