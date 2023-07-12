import React from "react";
import Cards from "../components/Cards";
import cardsData from "../data/cardsdata.js";

function selectCard(props) {
  return <Cards
      key={props.key}
      icon={props.icon}
      title={props.title}
      subtitle={props.subtitle}
      about={props.about}
      buttontext={props.buttontext}
      buttonlink={props.buttonlink}
      image={props.image}
    />
}

function Card() {
  return <div className="card">{cardsData.map(selectCard)}</div>;
}

export default Card;
