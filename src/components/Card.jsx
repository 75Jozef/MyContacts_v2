import React from "react";
import Avatar from "./Avatar.jsx";
import Details from "./Details.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <div>
          <p>{props.id}</p>
        </div>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <div className="bottom">
        <Details phone={props.phone} email={props.email} />
      </div>
    </div>
  );
}

export default Card;
