import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => props.shuffleFriends(props.id)} className="shuffle">
    <div className="card">
        <div className="img-container" >
          <img alt={props.id} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
