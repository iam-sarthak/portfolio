import React from "react";
import "../styling/card.css";
function Cards(props) {
  return (
    <div className="cards">
      <div className="cardtext">
        <div className="glyphicon glyphicon-th"></div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>

        <p>
        {props.about}
        </p>
        <div className="cardspacing"></div>
        <div className="cardbutton">
          <a href={props.buttonlink}>{props.buttontext}</a>
        </div>

      </div>
      <div className="cardimage">
        <img
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Cards;
