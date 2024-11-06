// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template');
function addCard(name, link, deleteCallback) {
    const cardBlock = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardBlock.querySelector('.card__title');
    const cardImage = cardBlock.querySelector('.card__image');
    const deleteButton = cardBlock.querySelector('.card__delete-button');
    cardTitle.textContent = name;
    cardImage.src = link;
    deleteButton.addEventListener('click', () => {
        deleteCallback(cardBlock);
    })
    return cardBlock;
};
function cardDelete(card) {
    card.remove();
};
const placecCardList = document.querySelector('.places__list');

initialCards.forEach(function (element) {
    const cardBlock = cardTemplate.querySelector('.card').cloneNode(true);

    cardBlock.querySelector('.card__title').textContent = element.name;
    cardBlock.querySelector('.card__image').src = element.link;
    cardBlock.querySelector('.card__image').alt = element.name;
    placecCardList.append(cardBlock)
});
//function addCardList() {
//    initialCards.forEach((li) => {
//    const card = addCard(li.name, li.link, cardDelete)
//    placecCardList.append(card);
//});
//};