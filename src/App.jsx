import "./index.css";

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

        <div className="listContainer"></div>
      </div>
    </>
  );
}

export default App;
