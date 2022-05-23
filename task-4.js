let counter = 0;

const refs = {
  decrementButtonEl: document.querySelector('[data-action="decrement"]'),
  incrementButtonEl: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector("#value")

};

console.log(refs.decrementButtonEl);
console.log(refs.incrementButtonEl);
console.log(refs.counterValue);



const onButtonClick = (num) => {
  counter += num;
  refs.counterValue.textContent = counter;
 }

refs.decrementButtonEl.addEventListener('click', () => onButtonClick(-1));
refs.incrementButtonEl.addEventListener('click', () => onButtonClick(+1));


