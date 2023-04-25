import { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';
import '../index.css';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.avatarInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api.initialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile" aria-label="Секция с профилем">
                <button className="profile__button-avatar" onClick={onEditAvatar}>
                    <img className="profile__avatar" alt="аватарка" src={userAvatar} />
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-name">{userName}</h1>
                    <p className="profile__info-job">{userDescription}</p>
                </div>
                <button
                    className="profile__button-edit"
                    type="button"
                    aria-label="кнопка редактирования профиля"
                    onClick={onEditProfile}
                ></button>
                <button
                    className="profile__button-add"
                    type="button"
                    aria-label="кнопка отправки текста"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section id="elements" className="elements" aria-label="Секция с фото">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick} />
                ))}
            </section>
        </main>

    )
}

export default Main;
