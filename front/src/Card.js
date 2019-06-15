import React from "react";
import "./Card.css";
function Card(props) {
  let data = props.data;
  return (
    <div className="card" onClick={props.handleClickCard} style={{ backgroundImage: `url('${data.thumbnail}')` }}>
      <div className="details">
        <div>
          <span className="title">{data.title}</span>
          <span className="genre">{data.genre}</span>
        </div>
        <div>
          <span className="rating">
            {"⭐".repeat(Math.floor(data.rating))}
            {data.rating}
          </span>
          <span className="comments">
            {"💬"}
            {parseInt(data.comments).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
