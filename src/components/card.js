import { cardTemplate } from "./names";

function createCard(name, link, deleteCallback, openImage, likeCallback) {
    const cardBlock = cardTemplate.content.querySelector('.card').cloneNode(true);
    const cardTitle = cardBlock.querySelector('.card__title');
    const cardImage = cardBlock.querySelector('.card__image');
    const deleteButton = cardBlock.querySelector('.card__delete-button');
    const likeButton = cardBlock.querySelector('.card__like-button');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    deleteButton.addEventListener('click', () => {
        deleteCallback(cardBlock);
    });
    likeButton.addEventListener('click', () => {
       likeCallback(likeButton);
    });
    cardImage.addEventListener('click', () => {
        openImage(link, name);
    });
    return cardBlock;
};

function deleteCallback (cardBlock) {
    cardBlock.remove()
};

function likeCallback(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
};

export {createCard, deleteCallback, likeCallback};