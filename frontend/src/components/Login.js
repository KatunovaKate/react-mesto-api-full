import React from "react";

function Login({ onLogin }) {
  const [loginData, setRegisterData] = React.useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    onLogin(loginData).catch((err) =>
      console.log(err.message || "Что-то пошло не так")
    );
  };

  return (
    <div className="auth">
      <h3 className="auth__title">Вход</h3>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          name="email"
          value={loginData.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="popup__form popup__form_type_white popup__input"
          required
          type="email"
        />
        <input
          name="password"
          value={loginData.password || ""}
          onChange={handleChange}
          placeholder="Пароль"
          className="popup__form popup__form_type_white popup__input"
          required
          type="password"
        ></input>
        <button
          className="popup__save-button popup__save-button_type_white button button_type_s-opacity"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
