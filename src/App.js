import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";
function App() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((rawData) => rawData.json())
      .then((data) => setCountries(data))
      .catch((e) => console.error("Error fetching data: ", e));
  }, []);
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      {countries.map((curr, i) => (
        <Card url={curr.flag} name={curr.name} abbr={curr.abbr} key={i} />
      ))}
    </div>
  );
}

export default App;
