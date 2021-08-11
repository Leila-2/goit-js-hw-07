const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('#ingredients');

function createEl(ingredients) {
  const arr = []
  ingredients.forEach(element => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = element
    arr.push(ingredientsEl)
  });

  return listEl.prepend(...arr)
}

createEl(ingredients)
