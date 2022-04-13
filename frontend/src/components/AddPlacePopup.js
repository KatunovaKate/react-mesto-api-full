import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onUpdateUser }) {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");

  function handleClosePopupClick() {
    onClose();
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleImageChange(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: title,
      link: image,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={handleClosePopupClick}
      onSubmit={handleSubmit}
      buttonName="Создать"
    >
      <input
        value={title}
        onChange={handleTitleChange}
        placeholder="Название"
        className="popup__form popup__input"
        type="text"
        name="title-of-image"
        id="title-of-image"
        required
        minLength="2"
        maxLength="30"
      />
      <span
        className="popup__input-error title-of-image-error"
        id="title-of-image-error"
      ></span>
      <input
        value={image}
        onChange={handleImageChange}
        placeholder="Ссылка на картинку"
        className="popup__form popup__input"
        name="image"
        id="image"
        required
        type="url"
      />
      <span className="popup__input-error image-error" id="image-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
