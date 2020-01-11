`use strict`;

const inputRange = document.querySelector(`#font-size-control`);
const textElem = document.querySelector(`#text`);
textElem.style.fontSize = (inputRange.value + `px`);

inputRange.addEventListener(`input`, function(){
  textElem.style.fontSize = (inputRange.value + `px`);
})