import React from "react";
import "./App.css";
import CounterButtons from "./counter/buttons";
import CounterViewer from "./counter/viewer";

function App() {
  return (
    <section className="App">
      <header className="header">
        <h1>Redux, um exemplo prático.</h1>
      </header>
      <div className="App-content">
        <div>
          <CounterViewer />
          <CounterButtons />
        </div>
      </div>
    </section>
  );
}

export default App;
