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
        <h1>To</h1>
        <h1>do</h1>
      </header>
      <div className="mainContent">
        <h2>My To-Do List</h2>

        <div className="listContainer">
          {tasks.map((task, index) => {
            return <Task taskItem={task} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
