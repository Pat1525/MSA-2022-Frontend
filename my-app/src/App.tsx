import { useState } from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "fruitName"
  const [fruitName, setFruitName] = useState("");

  return (
    <div>
      <h1>
        Fruit Search
      </h1>
      
      <div>
        <label>Fruit Name</label><br/>
        <input type="text" id="fruit-name" name="fruit-name" onChange={e => setFruitName(e.target.value)}/><br/>
        <button onClick={search}>
        Search
        </button>
      </div>

      <p>
        You have entered {fruitName}
      </p>
    </div>
  );

  function search(){
      alert("Search button has been clicked!");
  }
}

export default App;