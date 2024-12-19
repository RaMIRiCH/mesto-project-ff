import {putLikeCard, deleteLikeCard, deleteDataCard} from './API.js';

function createCard(item, deleteCallback, openImage, likeCallback, userId, cardId) {
    const cardTemplate = document.querySelector('#card-template');
    const cardBlock = cardTemplate.content.querySelector('.card').cloneNode(true);
    const cardTitle = cardBlock.querySelector('.card__title');
    const cardImage = cardBlock.querySelector('.card__image');
    const deleteButton = cardBlock.querySelector('.card__delete-button');
    const likeButton = cardBlock.querySelector('.card__like-button');
    const likeCounter = cardBlock.querySelector('.like-counter')
    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;
    likeCounter.textContent = item.likes.legth;
    if (item.owner._id !== userId) {
        deleteButton.remove()
    };
    if (item.likes.some((like) => like._id === userId)) {
        likeButton.classList.add('card__like-button_is-active')
    };
    deleteButton.addEventListener('click', () => {
        deleteCallback(cardBlock, cardId);
    });
    likeButton.addEventListener('click', () => {
       likeCallback(likeButton, likeCounter, cardId, userId, item.likes._id);
    });
    cardImage.addEventListener('click', () => {
        openImage(item.link, item.name);
    });
    return cardBlock;
};

function deleteCallback(card, cardId) {
    deleteDataCard(cardId)
    .then(() => {
        card.remove();
    })
    .catch((err) => {
        console.log(err);
    });
};

function likeCallback(likeButton, likeCounter, cardId, userId, item) {
    if (likeButton.classList.contains('card__like-button_is-active')) {
      deleteLikeCard(cardId)
        .then((res) => {
          likeButton.classList.toggle('card__like-button_is-active');
          likeCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      putLikeCard(cardId)
        .then((res) => {
          likeButton.classList.toggle('card__like-button_is-active');
          likeCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
};

export {createCard, deleteCallback, likeCallback};