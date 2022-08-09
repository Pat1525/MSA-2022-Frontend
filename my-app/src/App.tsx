import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  // Declare a new state variable, which we'll call "nbaName"
  const [nbaName, setNbaName] = useState("");
  const [nbaInfo, setNbaInfo] = useState<undefined | any>(undefined);

  const NBA_BASE_API_URL = "https://www.balldontlie.io/api/v1/players/";
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

      {nbaInfo === undefined ? (
        <p>Nba not found</p>
      ) : (
        <div id="nba-result">
          <p> {nbaInfo.first_name} </p>
          <p> {nbaInfo.last_name} </p>
        </div>
      )}
    </div>
  );

  function search() {
    axios.get(NBA_BASE_API_URL + nbaName).then((res) => {
      setNbaInfo(res.data);
    });
  }
}

export default App;