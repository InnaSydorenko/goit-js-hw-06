const categoriesArray = document.querySelectorAll('.item');
const numberOfCategories = categoriesArray.length;
console.log(`Number of categories: ${numberOfCategories}`);


const oneCategoriesEl = document.querySelector('.item');

const elementChild1 = oneCategoriesEl.firstElementChild;
const textContent1 = elementChild1.textContent;
console.log(`Category: ${textContent1}`);


const lastElementChild = oneCategoriesEl.lastElementChild;

const ulChildren = lastElementChild.children;
console.log(`Elements: ${ulChildren.length}`);


const nextElementSiblingEl = oneCategoriesEl.nextElementSibling;

const elementChild2 = nextElementSiblingEl.firstElementChild;

const textContent2 = elementChild2.textContent;
console.log(`Category: ${textContent2}`);

const lastElementChild2 = nextElementSiblingEl.lastElementChild;
const ulChildren2 = lastElementChild2.children;
console.log(`Elements: ${ulChildren2.length}`);


const elementChild3 = nextElementSiblingEl.nextElementSibling;
const firstElementChild3 = elementChild3.firstElementChild;
const textContent3 = firstElementChild3.textContent;
console.log(`Category: ${textContent3}`);

const lastElementChild3 = elementChild3.lastElementChild;
const ulChildren3 = lastElementChild3.children;
console.log(`Elements: ${ulChildren3.length}`);
