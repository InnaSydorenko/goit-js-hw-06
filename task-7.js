const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



const onInputHandler = () => { 
  textEl.classList.add('size-text');
};


inputEl.addEventListener('input', onInputHandler);