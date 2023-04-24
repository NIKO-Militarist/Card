"use strict"

document.querySelector('.input-form__button').addEventListener("click", () => {
   let someData = document.querySelector('.input-form__input').value;
   document.querySelector(".input-form__show-text").innerHTML = someData;

   const numberCard = "Картку № "
   const cardBlock = " заблоковано і всі кошти викрадено!"

   alert(numberCard + someData + cardBlock);
});

