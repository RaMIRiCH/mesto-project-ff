import './pages/index.css';
import {createCard, deleteCallback, likeCallback} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';
import {initialCards} from './scripts/cards.js';
import {
    placeCardList,
    popupImage,
    popupImageElement,
    popupCaption,
    closeModalButtons,
    popupEdit,
    profileEditButton,
    popupAddCard,
    profileAddButton,
    formElement,
    nameInput,
    jobInput,
    formElementAddCard,
    cardNameInput,
    cardLinkInput,
    profileTitle,
    profileDescription
} from './components/names.js';

profileAddButton.addEventListener('click', function () {
    openPopup(popupAddCard);
})

profileEditButton.addEventListener('click', function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupEdit);
});

initialCards.forEach(function (element) {
    const cardBlock = createCard(element.name, element.link, deleteCallback, openImage, likeCallback);
    placeCardList.append(cardBlock);
});

function openImage(link, name) {
    popupImageElement.src = link;
    popupImageElement.alt = name;
    popupCaption.textContent = name;
    openPopup(popupImage)
};

closeModalButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => {
        closePopup(popup);
    });
 }); 

function handleFormSubmit(evt) {
    evt.preventDefault();
    const newName = nameInput.value;
    const newJob = jobInput.value;
    profileTitle.textContent = newName;
    profileDescription.textContent = newJob;
    closePopup(popupEdit);
};

function handleCardSubmit(evt) {
    evt.preventDefault();
    const cardName = cardNameInput.value;
    const cardLink = cardLinkInput.value;
    const cardBlock = createCard(cardName, cardLink, deleteCallback, openImage, likeCallback);
    placeCardList.prepend(cardBlock);
    formElementAddCard.reset(); 
    closePopup(popupAddCard);
};

formElement.addEventListener('submit', handleFormSubmit); 
formElementAddCard.addEventListener('submit', handleCardSubmit);