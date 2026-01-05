import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(`${data.setup} ${data.punchline}`);
  };

  return (
    <div className="joke-container">
      <h1>Joke Generator using React </h1>

      <button onClick={getData}>
        Click to generate a joke
      </button>

      <div className="joke">
        {joke || "Click the button to get a joke!"}
      </div>
    </div>
  );
}

export default App;
