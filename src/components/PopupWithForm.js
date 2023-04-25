import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose }) {
    return (
        <section className={`popup ${name}-popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={onClose} ></button>
                <h2 className="popup__content-text">{title}</h2>
                <form className="popup__content" name={name} noValidate>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;