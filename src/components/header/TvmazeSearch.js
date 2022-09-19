import React from "react";
import Card from "./Card";
import "./TvmazeSearch.css";

const TvmazeSearch = ({ search, setSearch, data, rV, setrV }) => {
  return (
    <div className="main">
      {console.log(data)}
      {data.map((e) => {
        {
          console.log(e);
        }
        return <Card rV={rV} data={e} />;
      })}
    </div>
  );
};

export default TvmazeSearch;
