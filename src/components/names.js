const placeCardList = document.querySelector('.places__list');
const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const closeModalButtons = document.querySelectorAll('.popup__close');
const popupEdit = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupAddCard = document.querySelector('.popup_type_new-card');
const profileAddButton = document.querySelector('.profile__add-button');
const formElementProfile = document.querySelector('form[name="edit-profile"]');
const nameInput = formElementProfile.querySelector('.popup__input_type_name');
const jobInput = formElementProfile.querySelector('.popup__input_type_description');
const formElementAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = formElementAddCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formElementAddCard.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

export {
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
    profileDescription
};