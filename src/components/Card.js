import React from 'react';

function Card(props) {
    const { card } = props;

    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <div className="element">
            <button className="element__delete" type="button" aria-label="удаление карточки"></button>
            <img className="element__foto" src={card.link} alt={card.name} aria-label="фото" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick} />
            <div className="element__container">
                <h2 className="element__text">{card.name}</h2>
                <button className="element__like" type="button" aria-label="кнопка нравится"></button>
                <span className="element__number-like">{card.likes.length}</span>
            </div>
        </div>
    );
}

export default Card;
