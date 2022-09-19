import React from "react";
import "./Card.css";
import img from "../../Assets/img1.jpg";

let Card = (props) => {
  return (
    <>
      <div className="card-frame">
        <div className="image-container">
          {props.rV == "shows" ? (
            props.data.show.image != null ? (
              <img className="image" src={props.data.show.image.medium}></img>
            ) : (
              <img className="image" src={img}></img>
            )
          ) : props.data.person.image != null ? (
            <img className="image" src={props.data.person.image.medium}></img>
          ) : (
            <img className="image" src={img}></img>
          )}
        </div>
        <div className="top-details">
          <div className="detail-container">
            {props.rV === "shows" ? (
              <p>Name: {props.data.show.name}</p>
            ) : (
              <p>Name: {props.data.person.name}</p>
            )}
          </div>
          <div className="detail-container">
            {props.rV === "shows" ? (
              props.data.show.rating.average != null ? (
                <p>Rating: {props.data.show.rating.average}</p>
              ) : (
                <p>Rating: N/A</p>
              )
            ) : props.data.person.country != null ? (
              <p>Country: {props.data.person.country.name}</p>
            ) : (
              <p>Country: N/A</p>
            )}
          </div>
        </div>
        <div className="botton-details">
          <div className="type-details">
            {props.rV === "shows" ? (
              <p>Type: {props.data.show.type}</p>
            ) : props.data.person.birthday != null ? (
              <p>Birthday: {props.data.person.birthday}</p>
            ) : (
              <p>Type: birthday: N/A</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
