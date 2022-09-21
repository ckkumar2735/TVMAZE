import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TvmazeSearch from "./components/header/TvmazeSearch";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [rV, setRV] = useState("");

  useEffect(() => {
    let API = `https://api.tvmaze.com/search/{rV}?q={search}`;
    // if (rV === "actor") {
    //   setRV("actor");
    // } else {
    //   setRV("people");
    // }
    fetch(API)
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, [search, rV]);

  return (
    <div className="App">
      <Header setSearch={setSearch} search={search} setRV={setRV} rV={rV} />
      <TvmazeSearch search={search} data={data} setRV={setRV} rV={rV} />
    </div>
  );
}

export default App;
