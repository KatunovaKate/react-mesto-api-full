import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleClosePopupClick() {
    onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={handleClosePopupClick}
      buttonName="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        value={name || ""}
        onChange={handleNameChange}
        placeholder="Имя"
        className="popup__form popup__input"
        type="text"
        name="username"
        id="username"
        required
        minLength="2"
        maxLength="40"
      />
      <span
        className="popup__input-error user-name-error"
        id="user-name-error"
      ></span>
      <input
        value={description || ""}
        onChange={handleDescriptionChange}
        placeholder="О себе"
        className="popup__form popup__input"
        type="text"
        name="description"
        id="description"
        required
        minLength="2"
        maxLength="200"
      />
      <span
        className="popup__input-error description-error"
        id="description-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
