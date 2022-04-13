import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleClosePopupClick() {
    onClose();
  }

  return (
    <PopupWithForm
      name="change-photo"
      title="Обновить аватар"
      isOpen={isOpen}
      buttonName="Создать"
      onClose={handleClosePopupClick}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        placeholder="Ссылка на картинку"
        className="popup__form popup__input"
        name="photo"
        id="photo"
        required
        type="url"
      />
      <span className="popup__input-error image-error" id="photo-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
