import '../index.css';
import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  // Переменные состояния для отображения попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Обработчик клика по кнопке редактирования аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Обработчик клика по кнопке редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // Обработчик клика по кнопке добавления места
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card); // Задаем выбранную карточку в переменную состояния
  }

  // Обработчик закрытия попапов
  function handleClosePopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>

      <Header />
      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={handleClosePopups}>
        <input
          id="input-name"
          required=""
          minLength={2}
          maxLength={40}
          className="popup__input-form popup__input-form_type_name"
          type="text"
          defaultValue=""
          name="name"
          placeholder="введите имя"
        />
        <span id="input-name-error" className="error" />
        <input
          id="input-job"
          required=""
          minLength={2}
          maxLength={200}
          className="popup__input-form popup__input-form_type_job"
          type="text"
          defaultValue=""
          name="job"
          placeholder="описание работы"
        />
        <span id="input-job-error" className="error" />
        <button className="popup__submit" type="submit">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={handleClosePopups}>
        <input
          id="input-add"
          required=""
          minLength={2}
          maxLength={30}
          className="popup__input-form popup__input-form_type_name-image"
          type="text"
          defaultValue=""
          name="name"
          placeholder="Название"
        />
        <span id="input-add-error" className="error" />
        <input
          id="input-link"
          required=""
          className="popup__input-form popup__input-form_type_src-image"
          type="url"
          defaultValue=""
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span id="input-link-error" className="error" />
        <button className="popup__submit" type="submit">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClosePopups} >
        <input
          id="input-avatar-link"
          required=""
          className="popup__input-form popup__input-form_type_src-image"
          type="url"
          defaultValue=""
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span id="input-avatar-link-error" className="error" />
        <button className="popup__submit" type="submit">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?">
        <button className="popup__submit popup__submit_delete" type="submit">
          Да
        </button>
      </PopupWithForm>
      <ImagePopup

        card={selectedCard}
        onClose={handleClosePopups} />

    </>

  );
}

export default App;
