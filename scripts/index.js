// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');
// @todo: DOM узлы
const placecCardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
function createCard(name, link, deleteCallback) {
    const cardBlock = cardTemplate.content.querySelector('.card').cloneNode(true);
    const cardTitle = cardBlock.querySelector('.card__title');
    const cardImage = cardBlock.querySelector('.card__image');
    const deleteButton = cardBlock.querySelector('.card__delete-button');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    deleteButton.addEventListener('click', function () {
        deleteCallback(cardBlock);
    });
    return cardBlock;
};
function deleteCallback (cardBlock) {
    cardBlock.remove()
};
// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
    const cardBlock = createCard(element.name, element.link, deleteCallback);
    placecCardList.append(cardBlock);
});