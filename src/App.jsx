import "./index.css";
import Task from "./components/Task";

function App() {
  let tasks = [
    "Buy milk",
    "Read a book",
    "Collect parcel",
    "Book flights to Rome",
  ];

  return (
    <>
      <header>
        <h1>My To-Do List</h1>
      </header>
      <div className="mainContent">
        <ul>
          {tasks.map((task, index) => {
            return <Task taskItem={task} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
