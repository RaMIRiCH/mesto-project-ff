(()=>{"use strict";function e(e,t,n,o,r){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),p=c.querySelector(".card__title"),u=c.querySelector(".card__image"),d=c.querySelector(".card__delete-button"),a=c.querySelector(".card__like-button");return p.textContent=e,u.src=t,u.alt=e,d.addEventListener("click",(function(){n(c)})),a.addEventListener("click",(function(){r(a)})),u.addEventListener("click",(function(){o(t,e)})),c}function t(e){e.remove()}function n(e){e.classList.toggle("card__like-button_is-active")}var o=function(e){e.target===e.currentTarget&&p(e.currentTarget)};function r(e){"Escape"===e.key&&p(document.querySelector(".popup_is-opened"))}function c(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",r),e.addEventListener("mousedown",o)}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r),e.removeEventListener("mousedown",o)}var u=document.querySelector(".places__list"),d=document.querySelector(".popup_type_image"),a=document.querySelector(".popup__image"),i=document.querySelector(".popup__caption"),s=document.querySelectorAll(".popup__close"),l=document.querySelector(".popup_type_edit"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".popup_type_new-card"),y=document.querySelector(".profile__add-button"),v=document.querySelector('form[name="edit-profile"]'),f=v.querySelector(".popup__input_type_name"),k=v.querySelector(".popup__input_type_description"),q=document.querySelector('form[name="new-place"]'),S=q.querySelector(".popup__input_type_card-name"),L=q.querySelector(".popup__input_type_url"),g=document.querySelector(".profile__title"),E=document.querySelector(".profile__description");function h(e,t){a.src=e,a.alt=t,i.textContent=t,c(d)}y.addEventListener("click",(function(){c(m)})),_.addEventListener("click",(function(){f.value=g.textContent,k.value=E.textContent,c(l)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(o){var r=e(o.name,o.link,t,h,n);u.append(r)})),s.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){p(t)}))})),v.addEventListener("submit",(function(e){e.preventDefault();var t=f.value,n=k.value;g.textContent=t,E.textContent=n,p(l)})),q.addEventListener("submit",(function(o){o.preventDefault();var r=e(S.value,L.value,t,h,n);u.prepend(r),q.reset(),p(m)}))})();