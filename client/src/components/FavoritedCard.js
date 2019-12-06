import React from "react";
import "./FavoritedCard.css";
import whiteHeart from "../../public/icon/whiteheart.png";
import pinkHeart from "../../public/icon/pinkHeart.png";
export default function FavoritedCard({
  topic: { text, favorite, hashtag },
  onStatusChange
}) {
  return (
    <button
      className={hashtag ? "hashtag-card" : "topic-card"}
      onClick={() => onStatusChange("favorited")}
    >
      <h1>{text}</h1>{" "}
      {favorite ? (
        <img
          src={hashtag ? pinkHeart : whiteHeart}
          alt={"favorite"}
          className="heart-topic"
        />
      ) : (
        ""
      )}
    </button>
  );
}
