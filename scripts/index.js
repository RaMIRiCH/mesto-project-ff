// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template');
function addCard(name, link, deleteCallback) {
    const cardBlock = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardTemplate.querySelector('.card__title');
    const cardImage = cardTemplate.querySelector('.card__image');
    const deleteButton = cardTemplate.querySelector('.card__delete-button');
    cardTitle.textContent = name;
    cardImage.src = link;
}