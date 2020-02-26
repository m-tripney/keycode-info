const keycode = document.querySelector('.keycode-text');
const code = document.querySelector('.code-text');
const key = document.querySelector('.key-text');
const keyLocation = document.querySelector('.location-text');
const openingText = document.querySelector('.intro');
const openingTextCSS = `<style>.intro {display: none;}</style>`;
const allCards = document.querySelectorAll('.card');
let active = false;

const keyPress = document.addEventListener('keydown', (event) => {
  if (active === false) {
    openingText.insertAdjacentHTML('afterbegin', openingTextCSS);
    active = true;
    for (let i = 0; i < allCards.length; i += 1) {
      allCards[i].style.display = 'block';
    }
  }
  keycode.textContent = event.keyCode;
  code.textContent = event.code;
  if (event.keyCode === 32) {
    key.textContent = 'Spacebar';
  } else {
    key.textContent = event.key;
  }
  if (event.location === 1) {
    keyLocation.textContent = `${event.location} (Left)`;
  } else if (event.location === 2) {
    keyLocation.textContent = `${event.location} (Right)`;
  } else {
    keyLocation.textContent = `${event.location} (General)`;
  }
});