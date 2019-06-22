import React from "react";
import "./Card.css";
function Card(props) {
  let data = props.data;
  return (
    <div className="card" onClick={props.handleClickCard} style={{ backgroundImage: `url('${data.thumbnail}')` }}>
      <div className="details">
        <div className="titleArea">
          <span className="title ellipsis">{data.title}</span>
          <span className="genre ellipsis">{data.genre}</span>
        </div>
        <div className="ratingArea">
          <span className="rating ellipsis">
            {"⭐".repeat(Math.floor(data.rating))}
            {data.rating}
          </span>
          <span className="comments ellipsis">
            {"💬"}
            {parseInt(data.comments).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
