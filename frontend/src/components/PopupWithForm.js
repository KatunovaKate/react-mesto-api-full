import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className={`popup__close-button button button_type_m-opacity`}
          onClick={props.onClose}
          type="button"
        ></button>
        <h3 className="popup__title">{`${props.title}`}</h3>
        <form
          onSubmit={props.onSubmit}
          className={`popup__form`}
          method="POST"
          name={`${props.name}`}
        >
          {props.children}
          <button
            className={`popup__save-button button button_type_s-opacity`}
            type="submit"
          >
            {props.buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
