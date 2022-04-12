import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ cardElement, onCardClick, onDeleteCardClick, onLikeClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = cardElement.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete-button 
   button
   button_type_l-opacity
  ${isOwn ? "" : "element__delete-button_remove"}`;

  const isLiked = cardElement.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button
     button 
     button_type_l-opacity
     ${isLiked ? "element__like-button_active" : ""}`;

  function handleClick() {
    onCardClick(cardElement);
  }

  function handleDeleteCardClick() {
    onDeleteCardClick(cardElement._id);
  }

  function handleLikeClick() {
    onLikeClick(cardElement);
  }

  return (
    <li className="element">
      <div
        className="element__image"
        style={{ backgroundImage: `url(${cardElement.link})` }}
        onClick={handleClick}
      ></div>
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteCardClick}
      ></button>
      <div className="element__info">
        <h2 className="element__title">{cardElement.name}</h2>
        <div>
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <div className="element__number-of-likes">
            {cardElement.likes.length}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
