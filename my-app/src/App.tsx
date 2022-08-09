import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  // Declare a new state variable, which we'll call "nbaName"
  const [nbaName, setNbaName] = useState("");

  const NBA_BASE_URL = "https://www.balldontlie.io/api/v1/players/";
  return (
    <div>
      <h1>Nba Search</h1>
      <div>
        <label>Nba Name</label>
        <br />
        <input
          type="text"
          id="nba-name"
          name="nba-name"
          onChange={(e) => setNbaName(e.target.value)}
        />
        <br />
        <button onClick={search}>Search</button>
      </div>

      <p>You have entered {nbaName}</p>

      <div id="nba-result">This will show the result</div>
    </div>
  );

  function search() {
    axios.get(NBA_BASE_URL + nbaName).then((res) => {
      console.log(res.data);
    });
  }
}

export default App;