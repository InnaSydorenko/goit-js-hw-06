const buttonChangeColor = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');


function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyColor = () => { 
  document.body.style.backgroundColor = getRandomHexColor();
  const color = getRandomHexColor();
  spanEl.textContent = `${color}`
};


buttonChangeColor.addEventListener('click', bodyColor);