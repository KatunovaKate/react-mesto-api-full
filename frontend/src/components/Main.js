import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cards = props.cards;

  function handleCardLike(card) {
    props.onLikeClick(card);
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-common">
            <img
              src={currentUser.avatar}
              className="profile__avatar"
              alt={`Аватарка ${currentUser.name}`}
            />
            <button
              type="button"
              className="profile__edit-photo button"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__user-info">
            <div className="profile__name-edit">
              <h1 className="profile__username">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__edit-button button button_type_m-opacity"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__user-description">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button button button_type_m-opacity"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                cardElement={card}
                onCardClick={props.onCardClick}
                onDeleteCardClick={props.onDeleteClick}
                onLikeClick={handleCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
