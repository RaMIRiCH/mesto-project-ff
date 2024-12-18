const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-28',
  headers: {
    authorization: 'ede33469-0c8b-43b9-8038-818f8489a',
    'Content-type': 'application/json',
  },
};
  
const checkResponse = (res) => {
  if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
};
  
const getUserRequest = () =>
  fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
  
const loadCards = () =>
  fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);

const editProfileApi = (nameInput, jobInput) => 
  fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput,
      about: jobInput,
    }),
  }).then(checkResponse);    
  
const newAvatarApi = (link) => 
  fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: link }),
  }).then(checkResponse);
    
const addNewCardApi = (name, link) =>
  fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({ name, link }),
  }).then(checkResponse);
    
const deleteDataCard = (cardId) =>
  fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
    
const deleteLikeCard = (cardId) =>
  fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
    
const putLikeCard = (cardId) =>
  fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
    body: JSON.stringify({ _id: cardId }),
  }).then(checkResponse);
    
export {
  getUserRequest,
  loadCards,
  editProfileApi,
  newAvatarApi,
  addNewCardApi,
  deleteDataCard,
  deleteLikeCard,
  putLikeCard
};