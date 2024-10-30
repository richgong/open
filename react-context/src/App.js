import "./App.css";
import React, { useContext, useState } from "react";
import { GreetingProvider, GreetingContext } from "./GreetingProvider";

function ChildComponent() {
  const { greeting, name, setGreeting, setName } = useContext(GreetingContext);
  const [newGreeting, setNewGreeting] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <div>
      <b>Child Component:</b>
      <p>
        {greeting}, <b>{name}</b>, what's good!
      </p>

      <div>
        <input
          type="text"
          placeholder="New Greeting"
          value={newGreeting}
          onChange={(e) => setNewGreeting(e.target.value)}
        />
        <button onClick={() => setGreeting(newGreeting)}>
          Update Greeting
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={() => setName(newName)}>
          Update Name
        </button>
      </div>
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
  return (
    <GreetingProvider>
      <div className="App">
        <h1>App Component</h1>
        <ParentComponent />
      </div>
    </GreetingProvider>
  );
}

export default App;
