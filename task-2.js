const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulContainer = document.querySelector('#ingredients');




const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');

    liEl.textContent = ingredient;
    liEl.classList.add('item')
    return liEl;
})

   ulContainer.append(...elements)
  console.log(ulContainer);