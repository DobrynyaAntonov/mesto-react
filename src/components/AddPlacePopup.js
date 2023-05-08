import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";

function AddPlacePopup(props) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name: name,
            link: link,
        });
    }
    return <>
        <PopupWithForm name="add" title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Сохранить"
            onSubmit={handleSubmit}>

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
                onChange={handleNameChange}
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
                onChange={handleLinkChange}
            />
            <span id="input-link-error" className="error" />
        </PopupWithForm>
    </>
}

export default AddPlacePopup 
