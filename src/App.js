import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";
function App() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((rawData) => rawData.json())
      .then((data) => setCountries(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      {countries.map((curr) => (
        <Card
          url={curr.flag}
          name={curr.name}
          abbr={curr.abbr}
          key={curr.abbr}
        />
      ))}
    </div>
  );
}

export default App;
