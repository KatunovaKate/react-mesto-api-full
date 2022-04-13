import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as auth from "../utils/Auth.js";
import InfoTooltip from "./InfoTooltip.js";
import authOk from "../images/Union.svg";
import authNotOk from "../images/Union2.svg";

function Register() {
  const [registerData, setRegisterData] = React.useState({
    email: "",
    password: "",
  });
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = React.useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  function closeRegisterPopups() {
    setIsRegisterPopupOpen(false);
  }

  function openSuccessRegisterPopup() {
    setIsRegisterSuccess(true);
    setIsRegisterPopupOpen(true);
  }

  function openErrRegisterPopup() {
    setIsRegisterSuccess(false);
    setIsRegisterPopupOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .register(registerData)
      .then(() => {
        openSuccessRegisterPopup();
      })
      .catch(() => openErrRegisterPopup());
  }

  function pushOnLogin() {
    history.push("/sign-in");
  }

  return (
    <div className="auth">
      <h3 className="auth__title">Регистрация</h3>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          name="email"
          value={registerData.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="popup__form popup__form_type_white popup__input"
          required
          type="email"
        />
        <input
          name="password"
          value={registerData.password || ""}
          onChange={handleChange}
          placeholder="Пароль"
          className="popup__form popup__form_type_white popup__input"
          required
          type="password"
        />
        <button
          className="popup__save-button popup__save-button_type_white button button_type_s-opacity"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="auth__text">
        Уже зарегистрированы?{" "}
        <NavLink exact to="/sign-in" className="auth__link">
          Войти
        </NavLink>
      </p>

      <InfoTooltip
        isOpen={isRegisterPopupOpen}
        text={`${
          isRegisterSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."
        }`}
        onClose={isRegisterSuccess ? pushOnLogin : closeRegisterPopups}
        img={`${isRegisterSuccess ? authOk : authNotOk}`}
        alt={`${isRegisterSuccess ? "успешно" : "ошибка"}`}
      />
    </div>
  );
}

export default Register;
