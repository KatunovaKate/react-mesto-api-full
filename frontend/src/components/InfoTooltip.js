import React from "react";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className={`popup__close-button button button_type_m-opacity`}
          onClick={props.onClose}
          type="button"
        ></button>
        <img
          className="popup__auth-image"
          src={`${props.img}`}
          alt={`${props.alt}`}
        />
        <h3 className="popup__title popup__title_type_auth">{props.text}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
