import "./App.css";
import React, { createContext, useContext, useState } from "react";

export const GreetingContext = createContext();

function ChildComponent() {
  const { greeting, name, setGreeting, setName } = useContext(GreetingContext);

  return (
    <div>
      <b>Child Component:</b>
      <p>
        {greeting}, <b>{name}</b>, what's good!
      </p>
      <button onClick={() => setGreeting("What's up, React!")}>
        Update Greeting
      </button>
      <button onClick={() => setName("Jane")}>
        Update Name
      </button>
    </div>
  );
}

function ParentComponent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent />
    </div>
  );
}

function App() {
  const [greeting, setGreeting] = useState("YOOOOOOOO");
  const [name, setName] = useState("John");

  const context = { greeting, name, setGreeting, setName };

  return (
    <GreetingContext.Provider value={context}>
      <div className="App">
        <h1>App Component</h1>
        <ParentComponent />
      </div>
    </GreetingContext.Provider>
  );
}

export default App;
