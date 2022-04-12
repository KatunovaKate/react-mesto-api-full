class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this.about = config.about;
        this.name = config.name;
        this.avatar = config.avatar;
    }
    
    _checkStatus(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards() {
        return fetch(this._url + 'cards', {
            method: 'GET',
            headers: this._headers,
        }).then(res => this._checkStatus(res))
    }

    //получение имени и статуса
    getInfo() {
        return fetch(this._url + 'users/me', {
            method: 'GET',
            headers: this._headers,
        }).then(res => this._checkStatus(res))
    }

    //переписывание уже имеющихся данных = имя и статус пользователя
    setUserInfo({name, about}) {
        return fetch(this._url + 'users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
              })
        }).then(res => this._checkStatus(res))
    }

    setAvatar({avatar}) {
        return fetch(this._url + 'users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar
              })
        }).then(res => this._checkStatus(res))
    }

    //добавление карточки на сервер
    addCard(data) {
        return fetch(this._url + 'cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(res => this._checkStatus(res))
    }

    deleteCard(_id) {
        return fetch(`${this._url}cards/${_id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(res => this._checkStatus(res))
    }

    toggleLike(_id, isLiked) {
        return fetch(`${this._url}cards/likes/${_id}`, {
          method: isLiked ? 'PUT' : 'DELETE',
          headers: this._headers,
        }).then(res => this._checkStatus(res))
    }
}

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-29/",
    headers: {
      "Content-Type": 'application/json',
      authorization: '599d58cc-8009-4c2f-8eaa-205713197ccb',
    },
  })

export default api;