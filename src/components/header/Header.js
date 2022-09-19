import React from "react";
import "./Header.css";

const arr = [
  {
    name: "Actor",
    value: "people",
    type: "radio",
  },
  {
    name: "Shows",
    value: "shows",
    type: "radio",
  },
];

const Header = ({ setSearch, search, rV, setRV }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = (e) => {
    setRV(e.target.value);
  };

  return (
    <>
      <span className="header">TVmaze</span>
      <div className="searchbox">
        <form>
          <input
            className="searchBox"
            label="Search"
            placeholder="Search Movies"
            value={search}
            onChange={onChangeHandler}
          />
          <br />
          {arr.map((e) => {
            return (
              <>
                <input
                  type={e.type}
                  name={e.name}
                  value={e.value}
                  checked={rV === e.value}
                  onClick={onClickHandler}
                ></input>
                <label>{e.name}</label>
              </>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default Header;
