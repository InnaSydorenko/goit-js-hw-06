const inputEl = document.querySelector('#validation-input');




const onBlurHandler = (event) => {
 const checkLengthInput = inputEl.value.length == inputEl.dataset.length;
 return checkLengthInput ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
};

  inputEl.addEventListener('blur', onBlurHandler);
 

