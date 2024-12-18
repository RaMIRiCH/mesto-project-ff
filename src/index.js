import './pages/index.css';
import {createCard, deleteCallback, likeCallback} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';
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
    formElementProfile,
    nameInput,
    jobInput,
    formElementAddCard,
    cardNameInput,
    cardLinkInput,
    profileTitle,
    profileDescription,
    avatarForm,
    profileOpenAvatar,
    profileEditAvatar,
    modalAvatar,
    avatarUrlInput,
    btnSubmitAvatar,
    btnSubmitEditProfile,
    btnSubmitAddNewCard
} from './components/names.js';
import {clearValidation, enableValidation} from './components/validation.js';
import {
  getUserRequest,
  loadCards,
  editProfileApi,
  newAvatarApi,
  addNewCardApi
} from './components/API.js';
import {validationElements} from './components/validationElements.js';

enableValidation(validationElements);

let userId;
let cardId;

profileOpenAvatar.addEventListener('click', () => {
  openPopup(modalAvatar);
  clearValidation(modalAvatar, validationElements);
});

function addAvatar (evt) {
  evt.preventDefault();
  renderLoading(true, btnSubmitAvatar);
  newAvatarApi(avatarUrlInput.value)
    .then((res) => {
      profileEditAvatar.src = res.avatar;
      avatarForm.reset();
      closePopup(modalAvatar);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false, btnSubmitAvatar);
    });
};

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  clearValidation(popupAddCard, validationElements);
});

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
  clearValidation(popupEdit, validationElements);
});

function openImage(link, alt) {
  popupImageElement.src = link;
  popupImageElement.alt = alt;
  popupCaption.textContent = alt;
  openPopup(popupImage);
};

closeModalButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    closePopup(popup);
  });
}); 

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, btnSubmitEditProfile);
  editProfileApi(nameInput.value, jobInput.value)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closePopup(popupEdit);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false, btnSubmitEditProfile);
    });
};

function handleCardSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, btnSubmitAddNewCard);
  addNewCardApi(cardNameInput.value, cardLinkInput.value)
    .then((item) => {
      cardId = item._id;
      const newCard = createCard(
        item,
        deleteCallback,
        likeCallback,
        openImage,
        userId
      );
      addCard(newCard, true);
      formElementAddCard.reset();
      closePopup(popupAddCard);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      formElementAddCard.reset();
      renderLoading(false, btnSubmitAddNewCard);
    });
};

function addCard(item, atFirst) {
  if (atFirst) {
    placeCardList.prepend(item);
  } else {
    placeCardList.append(item);
  }
};

function renderLoading(isLoading, submitBtn) {
  if(isLoading) {
    submitBtn.textContent = 'Сохранение...';
  } else {
    submitBtn.textContent = 'Сохранить';
  }
};

formElementProfile.addEventListener('submit', handleFormProfileSubmit); 
formElementAddCard.addEventListener('submit', handleCardSubmit);
avatarForm.addEventListener('submit', addAvatar);

Promise.all([getUserRequest(), loadCards()])
  .then(([dataRes, cardRes]) => {
    userId = dataRes._id;
    profileTitle.textContent = dataRes.name;
    profileDescription.textContent = dataRes.about;
    profileEditAvatar.src = dataRes.avatar;

    cardRes.forEach(function (item) {
      cardId = item._id;
      const card = createCard(item, deleteCallback, likeCallback, openImage, userId);
      addCard(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });